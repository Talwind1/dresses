import { useState } from "react";
import { Link } from "react-router-dom";
function Home({ setUser }) {
  const [userId, setUserId] = useState();

  const change = (value) => {
    setUserId(value);
  };

  return (
    <div className="home">
      <input
        type="text"
        value={userId}
        onChange={(e) => change(e.target.value)}
        style={{ width: "200px" }}
        className="itn"
      />
      <Link to="/dresses">
        <button
          className="login btn"
          onClick={() => {
            setUser(userId);
          }}
        >
          Log in
        </button>
      </Link>
    </div>
  );
}
export default Home;
