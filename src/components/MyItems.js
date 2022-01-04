import { useState, useEffect } from "react";
import dressesApi from "../api.js";
import DressItem from "./DressItem.js";
import CrudElement from "./CrudElement.js";
import react from "react";

function MyItems({ items }) {
  const userId = 307840413;
  // const [userId, setUserId] = useState("");
  // const findUser = (value) => {
  //   setUserId(value);
  // };
  // const onLogIn = () => {
  //   const arr = items.filter((dress) => {
  //     return dress.userId === userId;
  //   });
  // };
  // const [item, setItem] = useState({
  //   size: "",
  //   image: "",
  //   color: "",
  //   location: "",
  //   price: "",
  // });

  const [myItems, setMyItems] = useState(items);
  const [show, setShow] = useState(false);
  const [showAdd, setAddShow] = useState(false);

  useEffect(() => {
    const arr = items.filter((dress) => {
      return dress.userId === userId;
    });
    setMyItems(arr);
    console.log(arr);
  }, []);

  const addComp = () => {
    setAddShow(!showAdd);
  };
  const showItems = () => {
    setShow(!show);
  };

  const createItem = async (id, item) => {
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

  const deleteDress = async (id) => {
    try {
      await dressesApi.delete(`dresses/${id}`);
      let items = myItems.filter((item) => {
        return item.id !== id;
      });
      setMyItems(items);
    } catch (e) {}
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
            updateFunc={() => updateFunc(dress.id)}
            dress={dress}
          />
        </react.Fragment>
      );
    });
  };
  return (
    <div className="my-items">
      {/* <button onClick={onLogIn}>Log in</button> */}
      {/* <input
        type="text"
        value={userId}
        onChange={(e) => findUser(e.target.value)}
      /> */}
      <div className="add-element">
        {" "}
        <button onClick={addComp} className="btn">
          add a dress
        </button>
        {showAdd && <CrudElement clickFunc={createItem} />}
        <button onClick={showItems} className="btn">
          Show Items
        </button>
      </div>
      <div className="dresses-container">{show && mapItems()}</div>
    </div>
  );
}

export default MyItems;
