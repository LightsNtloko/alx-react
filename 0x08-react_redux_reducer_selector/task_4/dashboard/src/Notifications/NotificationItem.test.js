import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("rendering components", () => {
  it("renders NotificationItem component without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html from type="default" value="test" props', () => {
    const wrapper = shallow(<NotificationItem />);
    wrapper.setProps({ type: "default", value: "test" });

    const html = wrapper.html();
    const expectedHtml = '<li class="default_2c02es" data-notification-type="default">test</li>';

    expect(html).toEqual(expectedHtml);
  });

  it('renders correct html from html="<u>test</u>" props', () => {
    const wrapper = shallow(<NotificationItem />);
    wrapper.setProps({ html: "<u>test</u>" });

    const html = wrapper.html();
    const expectedHtml = '<li data-urgent="true" class="urgent_cyonix"><u>test</u></li>';

    expect(html).toEqual(expectedHtml);
  });
});

describe("onclick event behaves as it should", () => {
  it("should call console.log", () => {
    const wrapper = shallow(<NotificationItem />);
    const spy = jest.fn();

    wrapper.setProps({ value: "test item", markAsRead: spy, id: 1 });
    
    // Trigger click event on the li element
    const liElement = wrapper.find("li");
    liElement.props().onClick();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(1);

    spy.mockRestore();
  });
});
