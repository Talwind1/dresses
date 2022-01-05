import { React, useEffect, useState } from "react";
import { BiHeartCircle } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
const Wishlist = ({ wishlist }) => {
  // useEffect(() => {
  //   console.log(wishlist);
  // }, []);

  // const [list, setList] = useState(wishlist);
  const mapWishlist = () => {
    return (
      <div className="dresses" style={{ padding: "3%" }}>
        {wishlist.map((dress) => {
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
              <img src={dress.image} style={{ height: "30rem" }} />

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
