import { useState } from "react";
import dressesApi from "../api.js";
import DressItem from "./DressItem.js";
import CrudElement from "./CrudElement.js";
import react from "react";

function MyItems() {
  const [item, setItem] = useState({
    size: "",
    image: "",
    color: "",
    location: "",
    price: "",
  });

  const [myItems, setMyItems] = useState([
    {
      size: "m",
      image: "https://i.ibb.co/g6t8FRF/50s-wedding-dres.jpg",
      color: "black",
      location: "Tel Aviv",
      price: 55,
      id: 1,
    },
  ]);
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

  const mapItems = () => {
    return myItems.map((dress) => {
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
          />
        </react.Fragment>
      );
    });
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

  const updateItem = async () => {};
  return (
    <div className="myItems">
      <button onClick={addComp}>add a dress</button>
      {showAdd && <CrudElement clickFunc={createItem} />}

      <>
        <button onClick={showItems}>Show Items</button>
        <>{show && mapItems()}</>
      </>
    </div>
  );
}

export default MyItems;
