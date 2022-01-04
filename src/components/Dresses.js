// import axios from "axios";
import { useState } from "react";
// import dressesApi from "../api.js";
import Filter from "./Filter.js";
import Sidebar from "./Sidebar.js";

function Dresses({ dresses }) {
  const [conditions, setConditions] = useState({
    location: null,
    size: null,
    color: null,
    price: null,
  });

  const newCons = (vals) => {
    setConditions(vals);
    console.log("conditions is", vals);
  };

  //creacte state of conditions to filter props
  const display = () => {
    return <Filter dresses={dresses} conditions={conditions} />;
  };

  return (
    <div>
      <Sidebar setCons={newCons} />

      {dresses && display()}
    </div>
  );
}
export default Dresses;
