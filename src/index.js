import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import App from './components/App';
import ConfigStore from './store/ConfigStore';
import {Provider} from 'react-redux';
import {loadItems} from './actions/itemAction';
import {loadMeasurements} from './actions/measurementAction';
import {loadPrices} from './actions/priceAction';
import {loadInventories} from './actions/InventoryAction';
import './styles/styles.css';   //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = ConfigStore();

// Dispatch actions to load initial state.
store.dispatch(loadInventories());
store.dispatch(loadItems());
store.dispatch(loadMeasurements());
store.dispatch(loadPrices());


render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);