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
import { loginRequest } from "../actions/uiActions"; // Import the loginRequest action creator

class App extends Component {
  state = {
    user: defaultUser,
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

  markNotificationAsRead = (id) => {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  };

  render() {
    const { user, listNotifications } = this.state;
    const { isLoggedIn, displayDrawer, loginRequest } = this.props; // Now using loginRequest from props

    return (
      <AppContext.Provider value={{ user, logout: this.props.logOut }}>
        <div className={css(styles.App)}>
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <Header />
          <main className={css(styles.mainContent)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={loginRequest} /> {/* Now passing loginRequest to Login */}
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

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  logOut: () => {},
  loginRequest: () => {}, // Default function for loginRequest
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  loginRequest: PropTypes.func.isRequired, // loginRequest as a required prop
};

// mapStateToProps to get isLoggedIn and displayDrawer from the Redux state
const mapStateToProps = (state) => ({
  isLoggedIn: state.get("isUserLoggedIn"),
  displayDrawer: state.get("isNotificationDrawerVisible"),
});

// mapDispatchToProps to connect loginRequest action creator to the component
const mapDispatchToProps = {
  loginRequest,
};

export { mapStateToProps };
export default connect(mapStateToProps, mapDispatchToProps)(App);
