import { useState } from "react";
import dressesApi from "../api.js";
import Input from "./Input";

function MyItems() {
  const [item, setItem] = useState({
    size: "",
    image: "",
    color: "",
    location: "",
    price: "",
    item: "",
  });

  const handleChange = (target) => {
    const { name, value } = target;
    let newItem = item;
    newItem[name] = value;
    setItem(newItem);
  };

  const createItem = async (size, location, price, color, image) => {
    try {
      const newDress = {
        size: item.size,
        location: item.location,
        price: item.price,
        color: item.color,
        image: item.image,
      };

      const { data } = await dressesApi.post("dresses", newDress);
      setItem(newDress);
      console.log(data);
    } catch {}
  };

  return (
    <div className="myItems">
      <h1>add a dress</h1>

      <ul>
        <li>
          {" "}
          <Input
            type="size"
            objVal={item.size}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
        <li>
          {" "}
          <Input
            type="image"
            objVal={item.image}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
        <li>
          {" "}
          <Input
            type="price"
            objVal={item.price}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
        <li>
          {" "}
          <Input
            type="location"
            objVal={item.location}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
        <li>
          {" "}
          <Input
            type="color"
            objVal={item.color}
            handleChange={(e) => handleChange(e.target)}
          />
        </li>
      </ul>
      <button onClick={createItem}>Add item</button>
      {}
    </div>
  );
}

export default MyItems;
