import { bindActionCreators } from "redux";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

/**
 * Action creator for login
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Object} - Action object
 */
export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

/**
 * Action creator for logout
 * @returns {Object} - Action object
 */
export const logout = () => ({
  type: LOGOUT,
});

/**
 * Action creator to display the notification drawer
 * @returns {Object} - Action object
 */
export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

/**
 * Action creator to hide the notification drawer
 * @returns {Object} - Action object
 */
export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

/**
 * Bound action creators for UI actions
 * @param {function} dispatch - Redux dispatch function
 * @returns {Object} - Bound action creators
 */
export const boundUIActions = (dispatch) =>
  bindActionCreators(
    {
      login,
      logout,
      displayNotificationDrawer,
      hideNotificationDrawer,
    },
    dispatch
  );
