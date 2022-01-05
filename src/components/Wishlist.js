import { React, useEffect, useState } from "react";
import dressesApi from "../api";

import { BsHeartFill } from "react-icons/bs";
const Wishlist = ({ wishlist }) => {
  const mapWishlist = () => {
    //displaying wishlist
    return (
      <div className="dresses" style={{ padding: "3%" }}>
        {wishlist &&
          wishlist.map((dress) => {
            return (
              <div
                className="wish-dress"
                key={dress.id}
                style={{ position: "relative" }}
              >
                <div>
                  {" "}
                  <BsHeartFill
                    className="liked"
                    style={{ position: "absolute" }}
                  />
                </div>
                <img
                  src={dress.image}
                  style={{ height: "30rem", width: "18rem" }}
                />

                <p className="dress_description">
                  Size {dress.size.toLowerCase()}, {dress.price}&#8362;{" "}
                  {dress.location}
                </p>
              </div>
            );
          })}
      </div>
    );
  };
  return (
    <div
      className="wishlist"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {mapWishlist()}
    </div>
  );
};

export default Wishlist;
