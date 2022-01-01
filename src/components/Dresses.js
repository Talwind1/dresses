import axios from "axios";
import { useState, useEffect } from "react";

function Dresses() {
  const [dresses, setDresses] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetching = async () => {
      try {
        const { data } = await axios.get(
          "https://61c311049cfb8f0017a3e937.mockapi.io/dresses"
        );
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
          <h4>{dress.location}</h4>
          <img src={dress.image} alt="dress pic"></img>
          <h4>{dress.size}</h4>
          {/* <h4>{dress.color}</h4> */}
          <span className="price">{dress.price}&#8362; </span>
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
