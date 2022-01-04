import { useState, useEffect } from "react";

function Filter({ dresses, conditions }) {
  const [filteredData, setFilteredData] = useState(dresses);

  useEffect(() => {
    const filterData = () => {
      let filtered = [...filteredData];
      if (conditions.location.length > 0) {
        filtered = filtered.filter((dress) => {
          return conditions.location.includes(dress.location);
        });
      }
      if (conditions.color.length > 0) {
        filtered = filtered.filter((dress) => {
          return conditions.color.includes(dress.color);
        });
      }
      if (conditions.size.length > 0) {
        filtered = filtered.filter((dress) => {
          return conditions.size.includes(dress.size);
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
        <div key={dress.id} className="dress">
          <img src={dress.image} alt="dress pic" className="dress-pic" />
          <p className="dress_description">
            size {dress.size.toUpperCase()}, {dress.price}&#8362;{" "}
            {dress.location}
          </p>
        </div>
      );
    });
  };

  return <div className="Filter">{mapData()}</div>;
}

export default Filter;
