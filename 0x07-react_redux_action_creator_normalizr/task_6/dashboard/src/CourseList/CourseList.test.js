import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("CourseList Component Tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.exists()).toBe(true);
  });

  it("renders correct number of rows", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    const headerRows = wrapper.find("thead").children();
    expect(headerRows).toHaveLength(2);

    headerRows.forEach((row) => {
      expect(
        row.equals(
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        )
      ).toBe(true);
    });

    const bodyRows = wrapper.find("tbody").children();
    expect(bodyRows).toHaveLength(3);
  });

  it("renders course details correctly", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    const firstCourse = wrapper.find("tbody").childAt(0);
    const secondCourse = wrapper.find("tbody").childAt(1);
    const thirdCourse = wrapper.find("tbody").childAt(2);

    expect(firstCourse.html()).toContain("<td>ES6</td><td>60</td>");
    expect(secondCourse.html()).toContain("<td>Webpack</td><td>20</td>");
    expect(thirdCourse.html()).toContain("<td>React</td><td>40</td>");
  });

  it("displays a message when no courses are available", () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    const body = wrapper.find("tbody");

    expect(body.children()).toHaveLength(1);
    expect(body.childAt(0).html()).toContain("No course available yet");
  });
});
