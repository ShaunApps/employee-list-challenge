import { REQUEST_USER, RECEIVE_USER } from "../actions/index";

const INITIAL_STATE = { user: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_USER:
      return { ...state, isFetchingFee: true };
    case RECEIVE_USER:
      return { ...state, isFetchingFee: false, user: action.user };
    default:
      return state;
  }
}
