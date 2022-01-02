import { useState } from "react";

function DressItem({ size, price, image, color, location, deleteFunc }) {
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
      <button>Update</button>
    </div>
  );
}
export default DressItem;
