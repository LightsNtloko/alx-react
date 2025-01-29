import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [checked, setChecked] = useState(false);

  const headerStyle = { backgroundColor: "#deb5b545" };
  const rowStyle = { backgroundColor: "#f5f5f5ab" };
  const selectedStyle = isHeader ? headerStyle : rowStyle;

  const handleCheckChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <tr style={selectedStyle} className={checked ? css(styles.rowChecked) : ""}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={css(styles.thCenter)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.td)}>
            <input type="checkbox" onChange={handleCheckChange} />
            {textFirstCell}
          </td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

const styles = StyleSheet.create({
  thCenter: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "center",
  },
  th: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "left",
  },
  td: {
    paddingLeft: "5px",
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
