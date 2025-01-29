import { bindActionCreators } from "redux";
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

/**
 * Action creator to mark a notification as read
 * @param {number} index - Index of the notification
 * @returns {Object} - Action object
 */
export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});

/**
 * Action creator to set the notification filter
 * @param {string} filter - The filter type
 * @returns {Object} - Action object
 */
export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

/**
 * Bound action creators for notification actions
 * @param {function} dispatch - Redux dispatch function
 * @returns {Object} - Bound action creators
 */
export const boundNotificationActions = (dispatch) =>
  bindActionCreators({ markAsRead, setNotificationFilter }, dispatch);
