import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";

const CourseList = ({ listCourses }) => (
  <table id="CourseList" className={css(styles.table)}>
    <thead>
      <CourseListRow textFirstCell="Available courses" isHeader />
      <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader />
    </thead>
    <tbody>
      {listCourses.length > 0 ? (
        listCourses.map(({ id, name, credit }) => (
          <CourseListRow
            key={id}
            textFirstCell={name}
            textSecondCell={credit}
          />
        ))
      ) : (
        <CourseListRow textFirstCell="No course available yet" />
      )}
    </tbody>
  </table>
);

const styles = StyleSheet.create({
  table: {
    marginTop: "2em",
    width: "100%",
    border: "1px solid #ddd",
    fontSize: "1.2rem",
    marginBottom: "15em",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
