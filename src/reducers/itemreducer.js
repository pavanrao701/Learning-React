import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function items(state = initialState.items, action) {
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return action.items;

    default:
      return state;
  }
}
