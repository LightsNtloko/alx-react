import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

/**
 * Action creator for selecting a course
 * @param {number} index - The index of the selected course
 * @returns {Object} - Action object
 */
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

/**
 * Action creator for unselecting a course
 * @param {number} index - The index of the unselected course
 * @returns {Object} - Action object
 */
export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});
