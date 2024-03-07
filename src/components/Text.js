import React from "react";
import PropTypes from "prop-types";
// import "./Text.css"; // Import a CSS file for styling

export const Text = ({ children, bold, level, faded }) => {
  // Determine the heading level based on the 'level' prop
  const HeadingLevel = `h${Math.max(1, Math.min(6, level))}`;

  // Define the CSS classes based on the props
  const classNames = [bold && "bold", faded && "faded", `level-${level}`]
    .filter(Boolean)
    .join(" ");

  return React.createElement(HeadingLevel, { className: classNames }, children);
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  faded: PropTypes.bool,
};

Text.defaultProps = {
  bold: false,
  level: 1,
  faded: false,
};
