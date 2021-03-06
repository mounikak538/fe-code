import { combineReducers } from "redux";
import projectData from "./projectReducer";
import apiCalls from "./apiStatusReducer";
import { loadingBarReducer } from "react-redux-loading-bar";
/**
 * Root reducer for application which combines all reducers
 *  @constant rootReducer
 */
const rootReducer = combineReducers({
  projectData,
  apiCalls,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
