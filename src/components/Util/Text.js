import React from "react";
import PropTypes from "prop-types";
import "./componentStyle.css"; // Import a CSS file for styling

export const Text = ({ children, bold, italic, level, light, xs, tabbed }) => {
  // Determine the heading level based on the 'level' prop
  const HeadingLevel = `h${Math.max(1, Math.min(6, level))}`;

  // Define the CSS classes based on the props
  const classNames = [
    "text",
    bold && "bold",
    italic && "italic",
    light && "light",
    xs && "xs",
    tabbed && "tabbed"
  ]
    .filter(Boolean)
    .join("-");

  // Define the font size based on the 'level' prop
  const fontSize = xs ? "14px" : level === 0 ? "17px" : `${10 + level * 10}px`;

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
  tabbed: PropTypes.bool,
};

Text.defaultProps = {
  bold: false,
  italic: false,
  light: false,
  tabbed: false,
  level: 0,
  xs: false,
};
