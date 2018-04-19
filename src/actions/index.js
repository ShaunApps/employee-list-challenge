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
      .then(json => dispatch(sortByLastName()));
  };
};

export const SORT_BY_LAST_NAME = "SORT_BY_LAST_NAME";
export function sortByLastName() {
  return {
    type: SORT_BY_LAST_NAME
  };
}

export const FILTER_BY_CITY = "FILTER_BY_CITY";
export function filterByCity(city) {
  return {
    type: FILTER_BY_CITY,
    city: city
  };
}

export const REQUEST_USER = "REQUEST_USER";
function requestUser() {
  return {
    type: REQUEST_USER
  };
}

export const RECEIVE_USER = "RECEIVE_USER";
function receiveUser(json) {
  return {
    type: RECEIVE_USER,
    user: json
  };
}

export const fetchUser = id => {
  return function(dispatch) {
    dispatch(requestUser());
    return fetch(`${starAPI}/${id}`)
      .then(
        response => response.json(),
        error => console.log("An error occured.", error)
      )
      .then(json => dispatch(receiveUser(json)));
  };
};
