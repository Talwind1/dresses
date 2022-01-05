import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dress from "./Dress.js";
import { BiHeartCircle } from "react-icons/bi";
function Filter({ dresses, conditions, addToWishlist }) {
  const [filteredData, setFilteredData] = useState(dresses);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const filterData = () => {
      let filtered = [...filteredData];
      if (conditions.location) {
        filtered = filtered.filter((dress) => {
          return conditions.location === dress.location;
        });
      }
      if (conditions.color) {
        filtered = filtered.filter((dress) => {
          return conditions.color === dress.color;
        });
      }
      if (conditions.size) {
        filtered = filtered.filter((dress) => {
          return conditions.size === dress.size;
        });
      }
      if (conditions.price) {
        filtered = filtered.filter((dress) => {
          return dress.price <= conditions.price;
        });
      }

      setFilteredData(filtered);
    };
    filterData();
  }, [conditions]);

  // const toggleActive = () => {
  //   setActive(!active);
  // };
  // let color = active ? "black" : " #f3f1f5";
  const mapData = () => {
    return filteredData.map((dress) => {
      return (
        <div
          key={dress.id}
          className="dress"
          style={{
            position: "relative",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <div
            className="like"
            onClick={(e) => {
              addToWishlist(dress);
            }}
          >
            <BiHeartCircle
              style={{ backgroundColor: "transperant" }}
              // style={{ color: color }}
              // onClick={() => toggleActive()}
            />
          </div>
          <img src={dress.image} alt="dress pic" className="dress-pic" />
          <Link
            to={{ pathname: `/dress/${dress.id}` }}
            style={{ textDecoration: "none" }}
            key={dress.id}
          >
            <p className="dress_description">
              Size {dress.size.toLowerCase()}, {dress.price}&#8362;{" "}
              {dress.location}
            </p>
          </Link>
        </div>
      );
    });
  };

  return <div className="dresses">{mapData()}</div>;
}

export default Filter;
