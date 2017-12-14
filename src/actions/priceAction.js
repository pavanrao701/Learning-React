import PriceApi from '../api/mockPrice';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadPricesSuccess(prices) {
  return {type: types.LOAD_PRICES_SUCCESS, prices};
}

export function loadPrices() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return PriceApi.getAllPrices().then(prices => {
      dispatch(loadPricesSuccess(prices));
    }).catch(error => {
      throw(error);
    });
  };
}
