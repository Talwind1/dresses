import { useState } from "react";
import CrudElement from "./CrudElement";
import dressesApi from "../api.js";

function DressItem({ size, price, image, color, location, deleteFunc, id }) {
  const [showUpdate, setShowUpdate] = useState(false);

  const upComp = () => {
    setShowUpdate(!showUpdate);
  };

  const updateItem = async (id) => {
    console.log(id);
    try {
      const { data } = await dressesApi.get("dresses");
      console.log(data);
      let dressEdit = data.find((dress) => dress.id === id);
      console.log(dressEdit);
    } catch (e) {}
  };
  return (
    <div className="dress-item" style={{ width: "25%", height: "20%" }}>
      <>
        <img
          className="dress-pic"
          src={image}
          alt="dress-pic"
          style={{ width: "100%", height: "auto" }}
        />
        <h4>Size: {size}</h4>
        <h4>Color: {color}</h4>
        <h4>Price: {price}</h4>
        <h4>Location:{location}</h4>
      </>
      )<button onClick={deleteFunc}>Delete</button>
      <button onClick={upComp}>Update</button>
      {showUpdate && <CrudElement clickFunc={() => updateItem(id)} />}
    </div>
  );
}
export default DressItem;
