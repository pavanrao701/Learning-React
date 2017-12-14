import * as types from './actionTypes';
import InventoryApi from '../api/mockInventory';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function loadInventoriesSuccess(inventories) {
  return { type: types.LOAD_INVENTORIES_SUCCESS, inventories};
}

export function createInventorySuccess(inventory) {
  return {type: types.CREATE_INVENTORY_SUCCESS, inventory};
}

export function updateInventorySuccess(inventory) {
  return {type: types.UPDATE_INVENTORY_SUCCESS, inventory};
}

export function loadInventories() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return InventoryApi.getAllInventories().then(inventories => {
      dispatch(loadInventoriesSuccess(inventories));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveInventory(inventory) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return InventoryApi.saveInventory(inventory).then(savedInventory => {
      inventory.id ? dispatch(updateInventorySuccess(savedInventory)) : dispatch(createInventorySuccess(savedInventory));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
