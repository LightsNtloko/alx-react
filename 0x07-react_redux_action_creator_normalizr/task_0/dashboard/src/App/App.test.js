/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { AppContext, defaultUser, logOut } from "./AppContext";

// Suppress Aphrodite styles during testing
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// Grouped test cases for component rendering
describe("App Component Rendering", () => {
  it("renders App component without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it("renders Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it("renders Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("renders Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  it("does not render CourseList by default", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<CourseList />)).toBe(false);
  });
});

// Test cases for logged-in user state
describe("Behavior when user is logged in", () => {
  const contextValue = { user: defaultUser, logOut };

  it("does not render Login component when user is logged in", () => {
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <App />
      </AppContext.Provider>
    );
    expect(wrapper.contains(<Login />)).toBe(false);
  });

  it("renders CourseList when user is logged in", () => {
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <App />
      </AppContext.Provider>
    );
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

  it("updates user state when logIn function is called", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const newUser = { email: "testy@gmail.com", password: "testy", isLoggedIn: true };
    const instance = wrapper.instance();

    instance.logIn(newUser.email, newUser.password);
    expect(wrapper.state().user).toEqual(newUser);
    wrapper.unmount();
  });

  it("resets user state when logOut function is called", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const instance = wrapper.instance();
    instance.logOut();
    expect(wrapper.state().user).toEqual(defaultUser);
    wrapper.unmount();
  });
});

// Test cases for component state
describe("Testing App Component State", () => {
  it("initializes displayDrawer to false", () => {
    const wrapper = mount(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it("sets displayDrawer to true when handleDisplayDrawer is called", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it("sets displayDrawer to false when handleHideDrawer is called", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });
});

// Test case for marking notifications as read
describe("markNotificationAsRead Method", () => {
  it("removes a notification by ID from the listNotifications array", () => {
    const contextValue = {
      user: defaultUser,
      logOut: jest.fn(),
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: "New alert!" } },
      ],
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <App />
      </AppContext.Provider>
    );

    const instance = wrapper.instance();
    instance.markNotificationAsRead(3);

    expect(wrapper.state().listNotifications).toEqual([
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ]);

    expect(wrapper.state().listNotifications.length).toBe(2);
    wrapper.unmount();
  });
});
