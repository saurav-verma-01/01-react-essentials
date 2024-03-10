import React from "react";

const TabButtons = ({ children, onButtonClick, isSelected }) => {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onButtonClick}>
        {children}
      </button>
    </li>
  );
};

export default TabButtons;
