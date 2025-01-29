import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "./uiActionCreators";

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

describe("UI Action Creators", () => {
  it("login should create an action to login a user", () => {
    const email = "test@example.com";
    const password = "password123";
    const expectedAction = { type: LOGIN, user: { email, password } };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it("logout should create an action to logout a user", () => {
    const expectedAction = { type: LOGOUT };
    expect(logout()).toEqual(expectedAction);
  });

  it("displayNotificationDrawer should create an action to display the notification drawer", () => {
    const expectedAction = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it("hideNotificationDrawer should create an action to hide the notification drawer", () => {
    const expectedAction = { type: HIDE_NOTIFICATION_DRAWER };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});
