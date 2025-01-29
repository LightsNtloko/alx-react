import PropTypes from "prop-types";

// Define the shape of a course object
const CourseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired,
}).isRequired;

export default CourseShape;
