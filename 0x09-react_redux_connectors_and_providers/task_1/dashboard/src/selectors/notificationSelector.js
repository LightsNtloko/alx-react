import { Map } from 'immutable';

// Selector to get the filter type from the state
export const filterTypeSelected = (state) => state.get('filter');

// Selector to get all notifications as an Immutable Map
export const getNotifications = (state) => state.get('notifications', Map());

// Selector to get only unread notifications as an Immutable Map
export const getUnreadNotifications = (state) =>
  state.get('notifications', Map()).filter((notification) => !notification.get('isRead'));
