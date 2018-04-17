const starAPI = "http://challenge-dev.starmarkcloud.com/users";

export const REQUEST_USERS = "REQUEST_USERS";
function requestUsers() {
  return {
    type: REQUEST_USERS
  };
}

export const RECEIVE_USERS = "RECEIVE_USERS";
function receiveUsers(json) {
  console.log(json);
  return {
    type: RECEIVE_USERS
    // TODO: handle incoming data
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
      .then(json => dispatch(receiveUsers(json)));
  };
};
