import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

// Initial state: an empty array
const initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => ({
        ...course,
        isSelected: false, // Ensure isSelected is false for all courses
      }));

    case SELECT_COURSE:
      return state.map((course) =>
        course.id === action.index
          ? { ...course, isSelected: true }
          : course
      );

    case UNSELECT_COURSE:
      return state.map((course) =>
        course.id === action.index
          ? { ...course, isSelected: false }
          : course
      );

    default:
      return state;
  }
};

export default courseReducer;
