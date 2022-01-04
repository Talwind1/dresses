import { useState } from "react";
function Select({ type, options, handleSelect }) {
  const createOptions = () => {
    return options.map((element) => {
      return (
        <option
          key={element}
          value={element}
          onSelect={(e) => handleSelect(e.target.value, type)}
        >
          {element}
        </option>
      );
    });
  };

  return (
    <>
      {" "}
      <select id="size">
        {createOptions()}
        {/* <option value="xs">xs</option>
        <option value="s">s</option>
        <option value="m">m</option>
        <option value="l">l</option>
        <option value="xl">xl</option> */}
      </select>
    </>
  );
}
export default Select;
