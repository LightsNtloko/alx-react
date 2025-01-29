import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Login component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Login logIn={() => {}} />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should have 3 input tags and 2 label tags", () => {
    const wrapper = shallow(<Login logIn={() => {}} />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(3);
  });
});

describe("Submit button functionality", () => {
  it("should have the submit button disabled by default", () => {
    const wrapper = shallow(<Login logIn={() => {}} />);
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });

  it("should enable the submit button when both email and password are provided", () => {
    const wrapper = shallow(<Login logIn={() => {}} />);

    wrapper.find("#email").simulate("change", { target: { value: "test@example.com" } });
    wrapper.find("#password").simulate("change", { target: { value: "password123" } });

    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(false);
  });

  it("should keep the submit button disabled if either email or password is empty", () => {
    const wrapper = shallow(<Login logIn={() => {}} />);

    wrapper.find("#email").simulate("change", { target: { value: "test@example.com" } });
    wrapper.find("#password").simulate("change", { target: { value: "" } });

    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });
});
