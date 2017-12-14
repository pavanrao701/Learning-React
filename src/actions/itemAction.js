import ItemApi from '../api/mockItems';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadItemsSuccess(items) {
  return {type: types.LOAD_ITEMS_SUCCESS, items};
}

export function loadItems() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return ItemApi.getAllItems().then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      throw(error);
    });
  };
}
