import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import dressesApi from "../api";
import Calendar from "react-calendar";

const Dress = ({}) => {
  const history = useHistory();
  const { id } = useParams();
  const [dress, setDress] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      try {
        const { data } = await dressesApi.get(`/dresses/${id}`);

        setDress(data);
      } catch (e) {
        throw e.messege;
      }
    };
    fetching();
  }, []);

  return (
    <div className="dress-page">
      <button className="btn" onClick={() => history.goBack()}>
        Back
      </button>
      <div className="dress-row">
        <div className="dress-pic-page">
          <img src={dress.image} alt="dress" />
        </div>
        <div className="dress-details-page">
          <p>Locate in {dress.location}</p>
          <p>size {dress.size}</p>

          <p>{dress.price}&#8362; </p>
          <Calendar />
          {/* <textarea style={{ width: "50%", heigth: "300%" }}></textarea> */}
        </div>
      </div>
    </div>
  );
};

export default Dress;
