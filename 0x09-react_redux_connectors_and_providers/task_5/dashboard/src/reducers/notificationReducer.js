import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

// Initial state with a loading attribute
const initialState = fromJS({
  filter: 'DEFAULT',
  notifications: {},
  loading: false, // Add loading attribute
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.isLoading); // Handle loading state change

    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep({ // Use mergeDeep to ensure nested state is merged
        notifications: fromJS(notificationsNormalizer(action.notifications).entities.notifications || {}),
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
