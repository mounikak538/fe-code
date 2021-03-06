import { createStore, applyMiddleware } from "redux";
import rootReducer from "./../reducers";
import thunk from "redux-thunk";
/**
 * Method to configure the store in production mode.

 * @function configureStore
 * @param {string} initialState - Contains initial app data .

 */
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
