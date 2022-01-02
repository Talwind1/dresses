import { useState } from "react";

import Input from "./Input";
function CrudElement({ clickFunc }) {
  const [item, setItem] = useState({
    size: "",
    image: "",
    color: "",
    location: "",
    price: "",
  });
  const handleChange = (target) => {
    console.log(target);
    const { name, value } = target;
    let newItem = { ...item };
    newItem[name] = value;
    setItem(newItem);
  };

  return (
    <div className="Create">
      <ul style={{ listStyle: "none" }}>
        <li>
          <Input
            type="size"
            value={item.size}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
        <li>
          <Input
            type="image"
            value={item.image}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
        <li>
          <Input
            type="price"
            value={item.price}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
        <li>
          <Input
            type="location"
            value={item.location}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
        <li>
          <Input
            type="color"
            value={item.color}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
      </ul>
      <button onClick={clickFunc}>Submit</button>
    </div>
  );
}
export default CrudElement;
