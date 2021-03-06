import { handleResponse, handleError } from "./apiUtils";
import { projectPort, baseUrl } from "./../constants";

export function updateDetails(obj) {
  const url = baseUrl + projectPort + "/api/se/search-email";
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(obj),
  })
    .then(handleResponse)
    .catch(handleError);
}
