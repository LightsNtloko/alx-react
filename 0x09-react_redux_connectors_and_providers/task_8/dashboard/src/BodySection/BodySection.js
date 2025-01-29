import React, { Component } from "react";
import PropTypes from "prop-types";

class BodySection extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className="body-section">
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySection;
