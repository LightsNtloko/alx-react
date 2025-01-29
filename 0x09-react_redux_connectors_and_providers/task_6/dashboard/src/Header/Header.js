import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { logout } from "../actions/uiActions"; // Assuming this is the logout action creator

function Header({ user, logOut }) {
  return (
    <>
      <div className={css(styles["App-header"])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>

      {user.isLoggedIn && (
        <section className={css(styles.greeting)} id="logoutSection">
          Welcome<strong> {user.email} </strong>
          <em>
            <a href="#" onClick={logOut}>
              (logout)
            </a>
          </em>
        </section>
      )}
    </>
  );
}

// mapStateToProps function to get the user from the Redux state
const mapStateToProps = (state) => ({
  user: state.get("user"), // Assuming "user" is stored in the state as an Immutable Map
});

// mapDispatchToProps function to map the logOut action creator to the props
const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logout()), // Dispatch the logout action
});

// Connect the component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Header);

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },

  greeting: {
    marginTop: "1rem",
  },
});
