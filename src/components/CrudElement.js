import { useState } from "react";

import Input from "./Input";
function CrudElement({ id, dress, clickFunc }) {
  // console.log({ dress });

  const [item, setItem] = useState({
    size: dress ? dress.size : "",
    image: dress ? dress.image : "",
    color: dress ? dress.color : "",
    location: dress ? dress.location : "",
    price: dress ? dress.price : "",
  });

  const handleChange = (target) => {
    const { name, value } = target;
    let newItem = { ...item };
    newItem[name] = value;
    setItem(newItem);
    console.log(item);
  };

  return (
    <div className="CrudElement">
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
      <button onClick={() => clickFunc(id, item)} className="btn">
        Submit
      </button>
    </div>
  );
}
export default CrudElement;
