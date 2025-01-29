import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {}).toJS()).toEqual({ courses: {} });
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [{ id: 1, name: 'React Course' }, { id: 2, name: 'Redux Course' }]
    };

    const newState = courseReducer(undefined, action);
    expect(newState.get('courses').toJS()).toEqual({
      1: { id: 1, name: 'React Course' },
      2: { id: 2, name: 'Redux Course' }
    });
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'React Course' }
      }
    });

    const action = { type: SELECT_COURSE, index: 1 };
    const newState = courseReducer(initialState, action);

    expect(newState.getIn(['courses', 1, 'isSelected'])).toBe(true);
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'React Course', isSelected: true }
      }
    });

    const action = { type: UNSELECT_COURSE, index: 1 };
    const newState = courseReducer(initialState, action);

    expect(newState.getIn(['courses', 1, 'isSelected'])).toBe(false);
  });
});
