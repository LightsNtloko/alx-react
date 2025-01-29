import React from "react";
import { shallow } from "enzyme";
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

describe("Notifications component tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeDefined();
  });

  it("renders correct number of NotificationItems when listNotifications is passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
    expect(wrapper.find(NotificationItem).at(0).prop("value")).toBe("New course available");
    expect(wrapper.find(NotificationItem).at(1).prop("value")).toBe("New resume available");
    expect(wrapper.find(NotificationItem).at(2).prop("html")).toBe(getLatestNotification());
  });

  it("renders 'No new notification for now' when listNotifications is empty", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem).exists()).toBe(false);
    expect(wrapper.text()).toContain("No new notification for now");
  });

  it("renders 'No new notification for now' when listNotifications is not passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).exists()).toBe(false);
    expect(wrapper.text()).toContain("No new notification for now");
  });

  it("renders menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find("div.menuItem").exists()).toBe(true);
    expect(wrapper.find("div.Notifications").exists()).toBe(false);
  });

  it("renders Notifications drawer when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("div.menuItem").exists()).toBe(false);
    expect(wrapper.find("div.Notifications").exists()).toBe(true);
  });

  it("re-renders if listNotifications prop changes", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const newListNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "default", html: getLatestNotification() },
      { id: 4, type: "default", value: "Another notification" },
    ];
    wrapper.setProps({ listNotifications: newListNotifications });
    expect(wrapper.find(NotificationItem)).toHaveLength(newListNotifications.length);
  });

  it("calls markAsRead and logs correct message", () => {
    const wrapper = shallow(<Notifications />);
    const spy = jest.spyOn(console, "log").mockImplementation();
    wrapper.instance().markAsRead(1);
    expect(spy).toHaveBeenCalledWith("Notification 1 has been marked as read");
    spy.mockRestore();
  });
});

describe("User interaction tests", () => {
  it("calls handleDisplayDrawer when menu item is clicked", () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    wrapper.find("div.menuItem").simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it("calls handleHideDrawer when close button is clicked", () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    wrapper.find("button").simulate("click");
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
