import {combineReducers} from 'redux';

import inventories from './inventoryreducer';
import items from './itemreducer';

import ajaxCallsInProgress from './ajaxStatusReducer';
import measurements from './measurementreducer';
import prices from './pricereducer';


const rootReducer = combineReducers({
inventories,
items,
measurements,
prices,
ajaxCallsInProgress
});

export default rootReducer;
