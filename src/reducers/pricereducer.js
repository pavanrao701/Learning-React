import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function prices(state = initialState.prices, action) {
  switch (action.type) {
    case types.LOAD_PRICES_SUCCESS:
      return action.prices;

    default:
      return state;
  }
}
