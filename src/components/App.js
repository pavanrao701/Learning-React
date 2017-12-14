import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from '../common/Header';
import Main from './Main';
import Inventories from '../containers/Inventories';
import ManageInventory from '../containers/ManageInventory'; //eslint-disable-line import/no-named-as-default
import {connect} from 'react-redux';


class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
        />

        <Route exact path="/" component={Main}/>
        <Route path="/inventory" component={Inventories}/>
        <Route path="/inventories/:id" component={ManageInventory}/>
        <Route path="/inventories" component={ManageInventory} exact />
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);