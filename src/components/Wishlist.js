import { React, useEffect, useState } from "react";

const Wishlist = ({ wishlist }) => {
  useEffect(() => {
    console.log(wishlist);
  }, []);
  return (
    <div>
      <img src={wishlist[0].image} />
    </div>
  );
};

export default Wishlist;
