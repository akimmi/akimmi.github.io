import React from "react";
import PropTypes from "prop-types";
import "./componentStyle.css"; // Import a CSS file for styling

export const Text = ({ children, bold, italic, level, light, xs }) => {
  // Determine the heading level based on the 'level' prop
  const HeadingLevel = `h${Math.max(1, Math.min(6, level))}`;

  // Define the CSS classes based on the props
  const classNames = ["text", bold && "bold", italic && "italic", light && "light", xs && "xs"]
    .filter(Boolean)
    .join("-");

  // Define the font size based on the 'level' prop
  console.log(children)
  console.log(level)
  const fontSize = xs ? '14px' : level === 0 ? '17px' : `${10 + level * 10}px`;
  console.log(classNames);

  return React.createElement(
    HeadingLevel,
    { className: classNames, style: { fontSize } },
    children
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  light: PropTypes.bool,
  xs: PropTypes.bool,
  level: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
};

Text.defaultProps = {
  bold: false,
  italic: false,
  light: false,
  level: 0,
  xs: false,
};
