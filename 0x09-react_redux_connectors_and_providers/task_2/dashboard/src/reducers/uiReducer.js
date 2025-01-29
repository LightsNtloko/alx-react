import { Map } from "immutable";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";

// Initial State using Immutable.js Map
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null, // Changed to null to indicate no user is logged in initially
});

// Reducer function
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", true);

    case HIDE_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", false);

    case LOGIN_SUCCESS:
      return state
        .set("isUserLoggedIn", true) // Set the user as logged in
        .set("user", action.user); // Set the user information from the action

    case LOGIN_FAILURE:
    case LOGOUT:
      return state
        .set("isUserLoggedIn", false) // Set the user as logged out
        .set("user", null); // Set user to null on logout

    default:
      return state;
  }
};

export default uiReducer;
