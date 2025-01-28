import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Course List Row Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);

    expect(wrapper.exists()).toBe(true);
  });

  it("renders a single cell with colspan=2 when textSecondCell is null", () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="test" textSecondCell={null} />);

    expect(wrapper.find("tr").children()).toHaveLength(1);
    expect(wrapper.find("th").html()).toBe("<th colSpan=\"2\">test</th>");
  });

  it("renders two cells when textSecondCell is provided", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);

    expect(wrapper.find("tr").children()).toHaveLength(2);
    expect(wrapper.find("td").first().html()).toBe("<td><input type=\"checkbox\" />test</td>");
    expect(wrapper.find("td").at(1).html()).toBe("<td>test</td>");
  });
});
