import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from "../actions/actionTypes";

// Action creator to set the loading state
export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  isLoading,
});

// Action creator to set the notifications
export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  notifications,
});

// Action creator to fetch notifications
export const fetchNotifications = () => {
  return (dispatch) => {
    // Dispatch loading state as true before the fetch
    dispatch(setLoadingState(true));

    // Fetch notifications from /notifications.json
    fetch("/notifications.json")
      .then((response) => response.json())
      .then((data) => {
        // Dispatch the notifications data
        dispatch(setNotifications(data));

        // Set loading state to false after the fetch is complete
        dispatch(setLoadingState(false));
      })
      .catch(() => {
        // In case of an error, still set loading to false
        dispatch(setLoadingState(false));
      });
  };
};
