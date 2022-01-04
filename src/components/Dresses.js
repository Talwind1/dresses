// import axios from "axios";
import { useState, useEffect } from "react";
import dressesApi from "../api.js";
import Filter from "./Filter.js";
import Sidebar from "./Sidebar.js";

function Dresses({ dresses }) {
  const [conditions, setConditions] = useState({
    location: ["Tel Aviv"],
    size: [],
    color: [],
    price: null,
  });

  // const [filter, setFilter] = useState(null);
  const [activeItems, setActiveItems] = useState({});

  const [loading, setLoading] = useState(false);
  // const [cities, setCities] = useState([
  //   "Tel Aviv",
  //   "Rishon Letzion",
  //   "Holon",
  //   "Hadera",
  //   "Modi'in",
  //   "Haifa",
  // ]);

  // useEffect(() => {
  //   setLoading(true);
  //   const fetching = async () => {
  //     try {
  //       const { data } = await dressesApi.get("dresses");

  //       setLoading(false);
  //       console.log(data);
  //       setDresses(data);
  //       console.log(dresses);
  //       // const res = await dressesApi.get("cities");
  //       // setCities(res.data);
  //       // console.log(cities);
  //     } catch (e) {
  //       throw e.messege;
  //     }
  //   };
  //   fetching();
  // }, []);
  const options = (arr) => {
    return arr.map((city, idx) => {
      return (
        <option value={city} key={idx}>
          {city}
        </option>
      );
    });
  };

  //creacte state of conditions to filter props
  const display = () => {
    return <Filter dresses={dresses} conditions={conditions} />;
    // return dresses.map((dress) => {
    //   return (
    //     <div key={dress.id} className="dress">
    //       <img src={dress.image} alt="dress pic" className="dress-pic" />
    //       <p className="dress_description">
    //         size {dress.size.toUpperCase()}, {dress.price}&#8362;{" "}
    //         {dress.location}
    //       </p>
    //     </div>
    //   );
    // });
  };
  // dresses.lconsole.log(activeItems);
  return (
    <div className="dresses">
      <Sidebar />
      {loading && <h3>Loading...</h3>}

      {dresses && display()}
    </div>
  );
}
export default Dresses;
