import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";

describe("uiReducer tests", () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it("should return the initial state when no action is passed", () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it("should return the initial state when SELECT_COURSE action is passed", () => {
    const action = { type: "SELECT_COURSE" }; // Unknown action
    expect(uiReducer(undefined, action)).toEqual(initialState);
  });

  it("should handle DISPLAY_NOTIFICATION_DRAWER action", () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = { ...initialState, isNotificationDrawerVisible: true };
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle HIDE_NOTIFICATION_DRAWER action", () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const prevState = { ...initialState, isNotificationDrawerVisible: true };
    const expectedState = { ...initialState, isNotificationDrawerVisible: false };
    expect(uiReducer(prevState, action)).toEqual(expectedState);
  });

  it("should handle LOGIN_SUCCESS action", () => {
    const action = { type: LOGIN_SUCCESS };
    const expectedState = { ...initialState, isUserLoggedIn: true };
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle LOGIN_FAILURE action", () => {
    const action = { type: LOGIN_FAILURE };
    const prevState = { ...initialState, isUserLoggedIn: true };
    const expectedState = { ...initialState, isUserLoggedIn: false };
    expect(uiReducer(prevState, action)).toEqual(expectedState);
  });

  it("should handle LOGOUT action", () => {
    const action = { type: LOGOUT };
    const prevState = { ...initialState, isUserLoggedIn: true };
    const expectedState = { ...initialState, isUserLoggedIn: false };
    expect(uiReducer(prevState, action)).toEqual(expectedState);
  });
});
