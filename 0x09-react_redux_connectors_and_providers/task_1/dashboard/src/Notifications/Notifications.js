import React, { PureComponent } from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends PureComponent {
  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    const notificationContent = (
      <div className={css(styles.notificationsContainer)}>
        <div className={css(styles.notificationsHeader)}>
          <p className={css(styles.notificationsTitle)}>
            Here is the list of notifications
          </p>
          <button
            className={css(styles.closeButton)}
            aria-label="Close"
            onClick={() => {
              console.log("Close button has been clicked");
              handleHideDrawer();
            }}
          >
            <img src={closeIcon} alt="Close icon" width="10px" />
          </button>
        </div>
        <ul className={css(styles.notificationList)}>
          {listNotifications.length === 0 ? (
            <NotificationItem type="default" value="No new notification for now" />
          ) : (
            listNotifications.map(({ id, type, value, html }) => (
              <NotificationItem
                key={id}
                type={type}
                value={value}
                html={html}
                markAsRead={() => this.props.markNotificationAsRead(id)}
              />
            ))
          )}
        </ul>
      </div>
    );

    return (
      <React.Fragment>
        {!displayDrawer ? (
          <div
            className={css(styles.menuItem)}
            onClick={handleDisplayDrawer}
          >
            <p>Your notifications</p>
          </div>
        ) : (
          notificationContent
        )}
      </React.Fragment>
    );
  }
}

const bounceAnimation = {
  "0%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-5px)" },
  "100%": { transform: "translateY(0px)" },
};

const fadeAnimation = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const styles = StyleSheet.create({
  notificationsContainer: {
    position: "absolute",
    top: "2em",
    right: "1em",
    backgroundColor: "#fff",
    border: "2px dashed red",
    padding: "1em",
    zIndex: 100,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 900px)": {
      width: "100%",
      top: "0",
      right: "0",
      border: "none",
      boxShadow: "none",
    },
  },

  notificationsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1em",
  },

  notificationsTitle: {
    margin: 0,
    fontWeight: "bold",
    fontSize: "1rem",
  },

  closeButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    outline: "none",
    transition: "transform 0.2s ease",
    ":hover": {
      transform: "scale(1.2)",
    },
  },

  notificationList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  menuItem: {
    textAlign: "right",
    cursor: "pointer",
    ":hover": {
      animationName: [bounceAnimation, fadeAnimation],
      animationDuration: "0.5s, 1s",
      animationIterationCount: "3",
    },
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

export default Notifications;
