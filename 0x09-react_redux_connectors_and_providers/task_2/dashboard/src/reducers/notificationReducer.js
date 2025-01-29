import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = fromJS({
  filter: 'DEFAULT',
  notifications: {}
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.merge({
        notifications: fromJS(notificationsNormalizer(action.data).entities.notifications || {})
      });

    case MARK_AS_READ:
      return state.setIn(['notifications', action.index, 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
};

export default notificationReducer;
