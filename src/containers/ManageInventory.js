import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as InventoryAction from '../actions/InventoryAction';
import InventoryForm from './InventoryForm';
import {itemsFormattedForDropdown} from '../selectors/itemsselectors';
import {measurementsFormattedForDropdown} from '../selectors/measurementselectors';
import {pricesFormattedForDropdown} from '../selectors/pricesselectors';
import toastr from 'toastr';

export class ManageInventory extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      inventory: Object.assign({}, this.props.inventory),
      errors: {},
      saving: false,
      redirect: false
    };

    this.saveInventory = this.saveInventory.bind(this);
    this.updateInventoryState = this.updateInventoryState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.inventory.id != nextProps.inventory.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({inventory: Object.assign({}, nextProps.inventory)});
    }
  }

  updateInventoryState(event) {
    const field = event.target.name;
    // Fix: Clone state to avoid manipulating below.
    let inventory = Object.assign({}, this.state.inventory);
    inventory[field] = event.target.value;
    return this.setState({inventory: inventory});
  }

  inventoryFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.inventory.items.length < 2) {
      errors.item = 'item must be at least 2 characters.';
      formIsValid = true;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

 

  saveInventory(event) {
    event.preventDefault();

    if (!this.inventoryFormIsValid()) {
      return;
    }


    this.setState({saving: true});
    this.props.actions.saveInventory(this.state.inventory)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false, redirect: true});
    toastr.success('inventory saved.');
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/inventory" />;
    }

    return (
      <InventoryForm
        inventory={this.state.inventory}
        onChange={this.updateInventoryState}
        onSave={this.saveInventory}
        errors={this.state.errors}
        allItems={this.props.items}
        allMeasurements={this.props.measurements}
        allPrices={this.props.prices}
        saving={this.state.saving}
      />
    );
  }
}

ManageInventory.propTypes = {
  inventory: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  measurements:PropTypes.array.isRequired,
  prices:PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

function getInventoryById(inventories, id) {
  const inventory = inventories.filter(inventory => inventory.id == id);
  if (inventory) return inventory[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const inventoryId = ownProps.match.params.id; // from the path `/course/:id`

  let inventory = 
  {
  items: '',
  measurements: '', 
  prices: ''
  };

  if (inventoryId && state.inventories.length > 0) {
    inventory = getInventoryById(state.inventories, inventoryId);
  }

  return {
    inventory: inventory,
    items: itemsFormattedForDropdown(state.items),
    measurements: measurementsFormattedForDropdown(state.measurements),
    prices: pricesFormattedForDropdown(state.prices)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(InventoryAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageInventory);
