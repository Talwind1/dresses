import { useState, useEffect } from "react";
import Select from "./Select";
function Sidebar({ setCons }) {
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
    console.log(vals);
  };

  // useEffect(() => {
  //   outerFetch();
  // }, [vals]);
  return (
    <div className="Sidebar">
      <Select
        type="size"
        options={["xs", "s", "m", "l", "xl"]}
        handleSelect={handleSelect}
      />
      <Select
        type="color"
        options={["pink", "white", "black", "light blue", "blue"]}
        handleSelect={handleSelect}
      />
      <Select
        type="location"
        options={["Tel Aviv", "Haifa", "Holon", "Rishon"]}
        handleSelect={handleSelect}
      />
      <button
        onClick={() => {
          setCons(vals);
        }}
        className="btn"
      >
        Find me a dress
      </button>
    </div>
  );
}
export default Sidebar;
