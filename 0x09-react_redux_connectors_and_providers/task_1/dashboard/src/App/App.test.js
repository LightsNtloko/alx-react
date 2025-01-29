import { shallow, mount } from "enzyme";
import React from "react";
import App, { mapStateToProps } from "./App";
import { fromJS } from "immutable";
import { createStore } from "redux";
import { Provider } from "react-redux";
import uiReducer, { initialState } from "../reducers/uiReducer";

const store = createStore(uiReducer, initialState);

describe("<App />", () => {
  it("mapStateToProps returns the correct object from user login state", () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });

    const expected = { isLoggedIn: true };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it("mapStateToProps returns the correct object from notification drawer state", () => {
    let state = fromJS({
      isNotificationDrawerVisible: true,
    });

    const expected = { displayDrawer: true };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it("renders the <App /> component correctly when logged in", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App isLoggedIn={true} displayDrawer={false} />
      </Provider>
    );

    expect(wrapper.find("CourseList").exists()).toBe(true);
    expect(wrapper.find("Login").exists()).toBe(false);
  });

  it("renders the <App /> component correctly when logged out", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App isLoggedIn={false} displayDrawer={false} />
      </Provider>
    );

    expect(wrapper.find("CourseList").exists()).toBe(false);
    expect(wrapper.find("Login").exists()).toBe(true);
  });

  it("should render notifications drawer when displayDrawer is true", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App isLoggedIn={true} displayDrawer={true} />
      </Provider>
    );

    expect(wrapper.find("Notifications").prop("displayDrawer")).toBe(true);
  });

  it("should not render notifications drawer when displayDrawer is false", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App isLoggedIn={true} displayDrawer={false} />
      </Provider>
    );

    expect(wrapper.find("Notifications").prop("displayDrawer")).toBe(false);
  });
});
