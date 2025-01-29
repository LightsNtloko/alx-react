/**
 * @jest-environment jsdom
 */
import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext } from "../App/AppContext";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should render a h1 element with the correct text", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });

  it("should not render logoutSection when user is not logged in", () => {
    const context = {
      user: { email: "", password: "", isLoggedIn: false },
      logOut: jest.fn(),
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").length).toBe(0);
    expect(wrapper.find("#logoutSection").exists()).toBe(false);
    wrapper.unmount();
  });

  it("should render logoutSection when user is logged in", () => {
    const context = {
      user: { email: "test@test.com", password: "123", isLoggedIn: true },
      logOut: jest.fn(),
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").length).toBe(1);
    expect(wrapper.find("#logoutSection").exists()).toBe(true);
    wrapper.unmount();
  });

  it("should call logOut function when the logout link is clicked", () => {
    const context = {
      user: { email: "test@test.com", password: "123", isLoggedIn: true },
      logOut: jest.fn(),
    };

    const spy = jest.spyOn(context, "logOut");

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find("a").simulate("click");

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
});
