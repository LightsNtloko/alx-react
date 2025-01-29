/**
 * @jest-environment jsdom
 */
import { shallow, mount } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { AppContext } from "../App/AppContext";

describe("Footer component tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the correct copyright text', () => {
    const wrapper = mount(<Footer />);

    expect(wrapper.find("p").text()).toBe(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
  });

  it("should not render 'Contact us' link when user is logged out", () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find("a").length).toBe(0);
    expect(wrapper.text()).not.toContain("Contact us");

    wrapper.unmount();
  });

  it("should render 'Contact us' link when user is logged in", () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: true,
      },
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find("a").length).toBe(1);
    expect(wrapper.text()).toContain("Contact us");

    wrapper.unmount();
  });
});
