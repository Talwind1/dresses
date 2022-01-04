import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import dressesApi from "../api";

const Dress = ({}) => {
  const history = useHistory();
  const { id } = useParams();
  const [dress, setDress] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      try {
        const { data } = await dressesApi.get(`/dresses/${id}`);

        console.log(data);
        setDress(data);
      } catch (e) {
        throw e.messege;
      }
    };
    fetching();
  }, []);

  return (
    <div>
      <button className="btn" onClick={() => history.goBack()}>
        Back
      </button>
      <h2>{dress.location}</h2>
      <h2>{dress.size}</h2>
      <h2>{dress.price}</h2>
      <img src={dress.image} alt="dress" style={{ width: "30rem" }} />
    </div>
  );
};

export default Dress;
