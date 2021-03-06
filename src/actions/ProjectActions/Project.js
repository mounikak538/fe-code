import * as projectApi from "../../api/projectApi";
import * as types from "../Types";
import { toast } from "react-toastify";
import { showLoading, hideLoading } from "react-redux-loading-bar";
/** @description Redux actions required for project related activities */
export function updateDetails(obj) {
  return function (dispatch) {
    dispatch(showLoading());
    return projectApi
      .updateDetails(obj)
      .then((response) => {
        dispatch(hideLoading());
        if (response.status === 200) {
        } else {
        }
      })
      .catch((error) => {
        dispatch(hideLoading());
        throw error;
      });
  };
}
