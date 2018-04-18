import {
  REQUEST_USERS,
  RECEIVE_USERS,
  SORT_BY_LAST_NAME,
  SORT_BY_CITY
} from "../actions/index";

const INITIAL_STATE = { users: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_USERS:
      return { ...state, isFetchingFee: true };
    case RECEIVE_USERS:
      return { ...state, isFetchingFee: false, users: action.users };
    case SORT_BY_LAST_NAME:
      let users = state.users;
      let sortedByLastName = users.sort(function(a, b) {
        var nameA = a.lastName.toLowerCase(),
          nameB = b.lastName.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      return { ...state, users: sortedByLastName };
    case SORT_BY_CITY:
      let existingUsers = state.users;
      let sortedByCity = existingUsers.sort(function(a, b) {
        var nameA = a.address.city.toLowerCase(),
          nameB = b.address.city.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      return { ...state, users: sortedByCity };
    default:
      return state;
  }
}
