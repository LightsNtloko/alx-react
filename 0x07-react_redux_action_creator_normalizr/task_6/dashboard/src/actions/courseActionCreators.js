import { bindActionCreators } from "redux";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

/**
 * Action creator to select a course
 * @param {number} index - Index of the course
 * @returns {Object} - Action object
 */
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

/**
 * Action creator to unselect a course
 * @param {number} index - Index of the course
 * @returns {Object} - Action object
 */
export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

/**
 * Bound action creators for course actions
 * @param {function} dispatch - Redux dispatch function
 * @returns {Object} - Bound action creators
 */
export const boundCourseActions = (dispatch) =>
  bindActionCreators({ selectCourse, unSelectCourse }, dispatch);
