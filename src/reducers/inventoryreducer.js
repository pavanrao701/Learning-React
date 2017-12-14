import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function inventoryreducer(state = initialState.inventories, action) {
  switch (action.type) {
    case types.LOAD_INVENTORIES_SUCCESS:
      return action.inventories;

    case types.CREATE_INVENTORY_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.inventory)
      ];

    case types.UPDATE_INVENTORY_SUCCESS:
      return [
        ...state.filter(inventory => inventory.id !== action.inventory.id),
        Object.assign({}, action.inventory)
      ];

    default:
      return state;
  }
}
