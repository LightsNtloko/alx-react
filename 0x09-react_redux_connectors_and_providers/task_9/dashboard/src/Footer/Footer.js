import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { connect } from "react-redux";

function Footer({ user }) {
  return (
    <div className="App-footer">
      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </div>
  );
}

// mapStateToProps function to get the user from the Redux state
const mapStateToProps = (state) => ({
  user: state.get("user"), // Assuming "user" is stored in the state
});

// Connect the component to Redux
export default connect(mapStateToProps)(Footer);
