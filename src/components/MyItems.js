import { useState } from "react";
import dressesApi from "../api.js";
import Input from "./Input";
import DressItem from "./DressItem.js";

function MyItems() {
  const [myItems, setMyItems] = useState([]);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({
    size: "",
    image: "",
    color: "",
    location: "",
    price: "",
    item: "",
  });

  // const inputRef = createRef();
  const handleChange = (target) => {
    console.log(target);
    const { name, value } = target;
    let newItem = { ...item };
    newItem[name] = value;
    setItem(newItem);
  };
  const deleteDress = async (id) => {
    try {
      const { data } = await dressesApi.delete(`dresses/${id}`);
      let items = myItems.filter((item) => {
        return item.id !== id;
      });
      setMyItems(items);
    } catch (e) {}
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

      const items = [...myItems, data];
      setMyItems(items);
      setItem({
        size: "",
        image: "",
        color: "",
        location: "",
        price: "",
        item: "",
      });
    } catch {}
  };

  const showItems = () => {
    setShow(!show);
  };

  const mapItems = () => {
    return myItems.map((dress) => {
      return (
        <div key={dress.id}>
          {" "}
          <DressItem
            size={dress.size}
            color={dress.color}
            location={dress.location}
            price={dress.price}
            image={dress.image}
            deleteFunc={() => deleteDress(dress.id)}
          />
        </div>
      );
    });
  };
  return (
    <div className="myItems">
      <h1>add a dress</h1>

      <ul>
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
      <button onClick={createItem}>Add item</button>
      <div>
        <button onClick={showItems}>Show Items</button>
        <div>{show && mapItems()}</div>
      </div>
    </div>
  );
}

export default MyItems;
