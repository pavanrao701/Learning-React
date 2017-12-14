import MeasurementApi from '../api/mockMeasurement';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadMeasurementsSuccess(measurements) {
  return {type: types.LOAD_MEASUREMENTS_SUCCESS, measurements};
}

export function loadMeasurements() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return MeasurementApi.getAllMeasurements().then(measurements => {
      dispatch(loadMeasurementsSuccess(measurements));
    }).catch(error => {
      throw(error);
    });
  };
}
