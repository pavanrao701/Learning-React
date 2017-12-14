import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function measurements(state = initialState.measurements, action) {
  switch (action.type) {
    case types.LOAD_MEASUREMENTS_SUCCESS:
      return action.measurements;

    default:
      return state;
  }
}
