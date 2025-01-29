import { Map } from "immutable";
import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";

describe("uiReducer with Immutable.js", () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: null, // Initially null as no user is logged in
  });

  it("should return the initial state when no action is passed", () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it("should return the initial state when SELECT_COURSE action is passed", () => {
    const action = { type: "SELECT_COURSE" }; // Unknown action
    expect(uiReducer(undefined, action).toJS()).toEqual(initialState.toJS());
  });

  it("should handle DISPLAY_NOTIFICATION_DRAWER action", () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = initialState.set("isNotificationDrawerVisible", true);
    expect(uiReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it("should handle HIDE_NOTIFICATION_DRAWER action", () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const prevState = initialState.set("isNotificationDrawerVisible", true);
    const expectedState = initialState.set("isNotificationDrawerVisible", false);
    expect(uiReducer(prevState, action).toJS()).toEqual(expectedState.toJS());
  });

  it("should handle LOGIN_SUCCESS action", () => {
    const action = { type: LOGIN_SUCCESS, user: { email: "test@test.com" } };
    const expectedState = initialState
      .set("isUserLoggedIn", true)
      .set("user", { email: "test@test.com" });
    expect(uiReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it("should handle LOGIN_FAILURE action", () => {
    const action = { type: LOGIN_FAILURE };
    const prevState = initialState.set("isUserLoggedIn", true);
    const expectedState = initialState.set("isUserLoggedIn", false);
    expect(uiReducer(prevState, action).toJS()).toEqual(expectedState.toJS());
  });

  it("should handle LOGOUT action", () => {
    const action = { type: LOGOUT };
    const prevState = initialState.set("isUserLoggedIn", true).set("user", { email: "test@test.com" });
    const expectedState = initialState.set("isUserLoggedIn", false).set("user", null);
    expect(uiReducer(prevState, action).toJS()).toEqual(expectedState.toJS());
  });
});
