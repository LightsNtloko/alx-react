import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

/**
 * Action creator for user login
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Object} - Action object
 */
export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

/**
 * Action creator for user logout
 * @returns {Object} - Action object
 */
export const logout = () => ({
  type: LOGOUT,
});

/**
 * Action creator for displaying the notification drawer
 * @returns {Object} - Action object
 */
export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

/**
 * Action creator for hiding the notification drawer
 * @returns {Object} - Action object
 */
export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});
