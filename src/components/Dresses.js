// import axios from "axios";
import { useState, useEffect } from "react";
import dressesApi from "../api.js";

function Dresses() {
  const [dresses, setDresses] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetching = async () => {
      try {
        const { data } = await dressesApi.get("dresses");
        setDresses(data);
        setLoading(false);
      } catch (e) {
        throw e.messege;
      }
    };
    fetching();
  }, []);

  const display = () => {
    return dresses.map((dress) => {
      return (
        <div key={dress.id} className="dress">
          <p className="dress_description">
            size {dress.size.toUpperCase()}, {dress.price}&#8362; from{" "}
            {dress.location}
          </p>
          <img src={dress.image} alt="dress pic"></img>
        </div>
      );
    });
  };
  return (
    <div className="dresses">
      {loading && <h3>Loading...</h3>}
      {dresses && display()}
    </div>
  );
}
export default Dresses;
