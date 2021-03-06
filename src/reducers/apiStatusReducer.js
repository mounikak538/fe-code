import * as types from "../actions/Types";
import initialState from "./initialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}
/**
 *  redux reducer for application api calls status
 *  @function apiCallStatusReducer
 */
export default function apiCallStatusReducer(
  state = initialState.apiCalls,
  action
) {
  if (action.type === types.BEGIN_API_CALL) {
    return { ...state, apiProgess: state.apiProgess + 1 };
  } else if (
    action.type === types.API_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return { ...state, apiProgess: state.apiProgess - 1 };
  } else if (action.type === types.SET_LOADER_STATUS) {
    return { ...state, loading: action.status };
  }
  return state;
}
