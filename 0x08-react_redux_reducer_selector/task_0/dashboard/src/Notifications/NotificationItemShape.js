import PropTypes from "prop-types";

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,  // Ensures that id is always a number
  content: PropTypes.shape({
    htmlContent: PropTypes.string,  // Optional HTML string for rendering
  }),
  category: PropTypes.string.isRequired,  // This could replace 'type' for uniqueness
  message: PropTypes.string,  // This could replace 'value' for uniqueness
});

export default NotificationItemShape;
