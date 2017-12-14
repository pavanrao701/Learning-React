import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as InventoryAction from '../actions/InventoryAction';
import InventoryList from './InventoryList';

class Inventories extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddInventory = this.redirectToAddInventory.bind(this);
  }

  redirectToAddInventory() {
    this.props.history.push('/inventories');
  }

  render() {
    return (
      <div>
        <h1>Inventory ITEMS</h1>
        <input type="submit"
               value="Add Inventory"
               className="btn btn-primary"
               onClick={this.redirectToAddInventory}/>

        <InventoryList inventories={this.props.inventories}/>
      </div>
    );
  }
}

Inventories.propTypes = {
  actions: PropTypes.object.isRequired,
  inventories: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    inventories: state.inventories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(InventoryAction, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Inventories));