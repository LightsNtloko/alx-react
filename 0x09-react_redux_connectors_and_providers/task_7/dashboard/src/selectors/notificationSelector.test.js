import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector tests', () => {
  const state = fromJS({
    filter: 'URGENT',
    notifications: {
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false }
    }
  });

  test('filterTypeSelected returns filter value', () => {
    expect(filterTypeSelected(state)).toBe('URGENT');
  });

  test('getNotifications returns all notifications', () => {
    expect(getNotifications(state).toJS()).toEqual({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false }
    });
  });

  test('getUnreadNotifications returns only unread notifications', () => {
    expect(getUnreadNotifications(state).toJS()).toEqual({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false }
    });
  });
});
