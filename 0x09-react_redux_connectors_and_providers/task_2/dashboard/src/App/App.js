import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, css } from "aphrodite";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { AppContext, user as defaultUser } from "./AppContext";
import { getLatestNotification } from "../utils/utils";
import { displayNotificationDrawer, hideNotificationDrawer } from "../actions/uiActions"; // Import action creators

class App extends Component {
  state = {
    user: defaultUser,
    logOut: this.logOut,
    listNotifications: [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: getLatestNotification() },
    ],
  };

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  };

  logIn = (email, password) => {
    this.setState({
      user: { email, password, isLoggedIn: true },
    });
  };

  logOut = () => {
    this.setState({
      user: defaultUser,
    });
  };

  markNotificationAsRead = (id) => {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  };

  render() {
    const { user } = this.state;
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;

    return (
      <AppContext.Provider value={{ user, logout: this.logOut }}>
        <div className={css(styles.App)}>
          <Notifications
            listNotifications={this.state.listNotifications}
            displayDrawer={displayDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
            handleDisplayDrawer={displayNotificationDrawer} // Passing props to components
            handleHideDrawer={hideNotificationDrawer} // Passing props to components
          />
          <Header />
          <main className={css(styles.mainContent)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the school">
              <p className={css(styles.newsText)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis at tempora odio, necessitatibus repudiandae
                reiciendis cum nemo sed asperiores ut molestiae eaque aliquam
                illo ipsa iste vero dolor voluptates.
              </p>
            </BodySection>
          </main>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#333",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
  },
  newsText: {
    fontSize: "14px",
    lineHeight: "1.5",
  },
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

// Updated mapStateToProps
const mapStateToProps = (state) => ({
  isLoggedIn: state.get("isUserLoggedIn"),
  displayDrawer: state.get("isNotificationDrawerVisible"),
});

// Simplified mapDispatchToProps
const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export { mapStateToProps };
export default connect(mapStateToProps, mapDispatchToProps)(App);
