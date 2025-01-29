import {
  markAsRead,
  setNotificationFilter,
} from "./notificationActionCreators";

import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "./notificationActionTypes";

describe("Notification Action Creators", () => {
  it("markAsRead should create an action to mark a notification as read", () => {
    const expectedAction = { type: MARK_AS_READ, index: 1 };
    expect(markAsRead(1)).toEqual(expectedAction);
  });

  it("setNotificationFilter should create an action to set the notification filter", () => {
    const expectedAction = { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.DEFAULT };
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(expectedAction);
  });
});
