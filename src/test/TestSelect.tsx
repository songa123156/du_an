import React, { useState } from "react";

const SelectWithHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // setIsHovered(false);
  };

  return (
    <div>
      <i
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: "red", fontSize: 50 }}
        className="bi bi-three-dots-vertical"
      ></i>
      {/* <select
        style={{ position: "absolute", top: 50, left: 50 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select> */}
      {isHovered && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <option style={{ display: "block" }} value="option1">
            Option 1
          </option>
          <option style={{ display: "block" }} value="option2">
            Option 2
          </option>
          <option style={{ display: "block" }} value="option3">
            Option 3
          </option>
        </div>
      )}
    </div>
  );
};

export default SelectWithHover;
