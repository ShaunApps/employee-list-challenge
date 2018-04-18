const starAPI = "http://challenge-dev.starmarkcloud.com/users";

export const REQUEST_USERS = "REQUEST_USERS";
function requestUsers() {
  return {
    type: REQUEST_USERS
  };
}

export const RECEIVE_USERS = "RECEIVE_USERS";
function receiveUsers(json) {
  return {
    type: RECEIVE_USERS,
    users: json
  };
}

export const fetchUsers = () => {
  return function(dispatch) {
    dispatch(requestUsers());
    return fetch(starAPI)
      .then(
        response => response.json(),
        error => console.log("An error occured.", error)
      )
      .then(json => dispatch(receiveUsers(json)))
      .then(json => dispatch(sortByLastName(json)));
  };
};

export const SORT_BY_LAST_NAME = "SORT_BY_LAST_NAME";
function sortByLastName(json) {
  console.log("action sorted: " + json.data);
  return {
    type: SORT_BY_LAST_NAME,
    users: json
  };
}

export const SORT_BY_CITY = "SORT_BY_CITY";
export function sortByCity() {
  return {
    type: SORT_BY_CITY
  };
}
