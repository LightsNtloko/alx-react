import { shallow, mount } from "enzyme";
import React from "react";
import App, { mapStateToProps } from "./App";
import { fromJS } from "immutable";
import { createStore } from "redux";
import { Provider } from "react-redux";
import uiReducer, { initialState } from "../reducers/uiReducer";

const store = createStore(uiReducer, initialState);

describe("<App />", () => {
  it("mapStateToProps returns the right object from user login state", () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });

    const expected = { isLoggedIn: true };
    expect(mapStateToProps(state)).toEqual(expected);
  });
});
