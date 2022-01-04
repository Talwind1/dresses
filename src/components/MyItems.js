import { useState } from "react";
import dressesApi from "../api.js";
import DressItem from "./DressItem.js";
import CrudElement from "./CrudElement.js";
import react from "react";

function MyItems({ items }) {
  const [userId, setUserId] = useState("");
  const findUser = (value) => {
    setUserId(value);
  };
  const onLogIn = () => {
    const arr = items.filter((dress) => {
      return dress.userId === userId;
    });
  };
  const [item, setItem] = useState({
    size: "",
    image: "",
    color: "",
    location: "",
    price: "",
  });
  const [myItems, setMyItems] = useState(items);
  const [show, setShow] = useState(false);
  const [showAdd, setAddShow] = useState(false);

  const addComp = () => {
    setAddShow(!showAdd);
  };
  const deleteDress = async (id) => {
    try {
      await dressesApi.delete(`dresses/${id}`);
      let items = myItems.filter((item) => {
        return item.id !== id;
      });
      setMyItems(items);
    } catch (e) {}
  };

  const showItems = () => {
    setShow(!show);
  };

  const mapItems = myItems.map((dress) => {
    return (
      <react.Fragment key={dress.id}>
        <DressItem
          size={dress.size}
          color={dress.color}
          location={dress.location}
          price={dress.price}
          image={dress.image}
          id={dress.id}
          deleteFunc={() => deleteDress(dress.id)}
          updateFunc={() => updateFunc(dress.id)}
          dress={dress}
        />
      </react.Fragment>
    );
  });

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
      const res = await dressesApi.post("cities", newDress.location);
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

  const updateFunc = async (id, newItem) => {
    console.log(id);
    console.log(newItem);
    try {
      const res = await dressesApi.put(`/dresses/${id}`, newItem);
      console.log(res);
    } catch (e) {}
    console.log(newItem);
  };
  return (
    <div className="myItems">
      <button onClick={onLogIn}>Log in</button>
      <input
        type="text"
        value={userId}
        onChange={(e) => findUser(e.target.value)}
      />
      <div className="add-element">
        {" "}
        <button onClick={addComp}>add a dress</button>
        <button onClick={showItems}>Show Items</button>
      </div>
      <div className="dresses-container">{show && mapItems}</div>
    </div>
  );
}

export default MyItems;
