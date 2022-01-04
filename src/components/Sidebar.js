import { useState } from "react";
import Select from "./Select";
function Sidebar() {
  const [vals, setVals] = useState({
    location: "",
    color: "",
    size: "",
    price: "",
  });
  const handleSelect = (value, type) => {
    const newValues = { ...vals };
    newValues[type] = value;
    setVals(newValues);
  };
  return (
    <div className="Sidebar">
      <Select
        type="size"
        options={["xs", "s", "m", "l", "xl"]}
        handleSelect={handleSelect}
      />
      {/* <select id="color">
        <option></option>
      </select>
      <select id="location">
        <option></option>
      </select> */}
    </div>
  );
}
export default Sidebar;
