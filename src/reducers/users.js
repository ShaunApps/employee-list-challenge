import {
  REQUEST_USERS,
  RECEIVE_USERS,
  SORT_BY_LAST_NAME,
  SORT_BY_CITY
} from "../actions/index";

const INITIAL_STATE = { users: [], sortedUsers: [] };

export default function(state = INITIAL_STATE, action) {
  let table = {};
  switch (action.type) {
    case REQUEST_USERS:
      return { ...state, isFetchingFee: true };
    case RECEIVE_USERS:
      return { ...state, isFetchingFee: false, users: action.users };
    case SORT_BY_LAST_NAME:
      let users = state.users;
      table = {};
      let sortedByLastName = users.sort(function(a, b) {
        var nameA = a.lastName.toLowerCase(),
          nameB = b.lastName.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      for (var i in sortedByLastName) {
        let letter = sortedByLastName[i].lastName[0].toLowerCase();
        if (letter in table) {
          table[letter].push(sortedByLastName[i]);
        } else {
          table[letter] = [];
          table[letter].push(sortedByLastName[i]);
        }
      }
      return { ...state, sortedUsers: table };
    case SORT_BY_CITY:
      let existingUsers = state.users;
      table = {};
      let sortedByCity = existingUsers.sort(function(a, b) {
        var nameA = a.address.city.toLowerCase(),
          nameB = b.address.city.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      for (var i in sortedByCity) {
        let letter = sortedByCity[i].address.city[0].toLowerCase();
        if (letter in table) {
          table[letter].push(sortedByCity[i]);
        } else {
          table[letter] = [];
          table[letter].push(sortedByCity[i]);
        }
      }
      return { ...state, sortedUsers: table };
    default:
      return state;
  }
}
