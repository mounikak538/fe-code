import * as types from "./Types";

/** 
 *  @description Redux Actions which describes api call status

 */
export function beginApiCall() {
  return { type: types.BEGIN_API_CALL };
}

export function apiCallError() {
  return { type: types.API_CALL_ERROR };
}

export function loaderStatus(status) {
  return { type: types.SET_LOADER_STATUS, status };
}
