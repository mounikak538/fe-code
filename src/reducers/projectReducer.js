import * as types from "../actions/Types";
import initialState from "./initialState";
/**
 *  reducer for project related activities
 *  @function projectReducer
 */
export default function projectReducer(
  state = initialState.projectData,
  action
) {
  switch (action.type) {
    case types.SEARCH_EMAIL_SUCCESS:
      return { ...state, emailSearchData: action.emailSearchData };

    default:
      return state;
  }
}
