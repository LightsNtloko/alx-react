import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {}).toJS()).toEqual({
      filter: 'DEFAULT',
      notifications: {}
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [{ id: 1, value: 'New Course' }, { id: 2, value: 'New Resume' }]
    };

    const newState = notificationReducer(undefined, action);
    expect(newState.get('notifications').toJS()).toEqual({
      1: { id: 1, value: 'New Course' },
      2: { id: 2, value: 'New Resume' }
    });
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, value: 'New Course', isRead: false }
      }
    });

    const action = { type: MARK_AS_READ, index: 1 };
    const newState = notificationReducer(initialState, action);

    expect(newState.getIn(['notifications', 1, 'isRead'])).toBe(true);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const newState = notificationReducer(undefined, action);

    expect(newState.get('filter')).toBe('URGENT');
  });
});
