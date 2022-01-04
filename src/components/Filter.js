import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dress from "./Dress.js";

function Filter({ dresses, conditions }) {
  const [filteredData, setFilteredData] = useState(dresses);

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

  const mapData = () => {
    return filteredData.map((dress) => {
      return (
        <Link to={{ pathname: `/dress/${dress.id}` }}>
          {" "}
          <div key={dress.id} className="dress">
            <img src={dress.image} alt="dress pic" className="dress-pic" />
            <p className="dress_description">
              Size {dress.size.toLowerCase()}, {dress.price}&#8362;{" "}
              {dress.location}
            </p>
          </div>
        </Link>
      );
    });
  };

  return <div className="dresses">{mapData()}</div>;
}

export default Filter;
