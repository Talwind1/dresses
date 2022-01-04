// import pure from "../img/pure.jpg";
import dresses from "../img/dress.jpg";
import { GoogleLogin } from "react-google-login";
import { useState, useEffect } from "react";
function Home() {
  // const [loginData, setLoginData] = useState(null);
  // const handleFailure = (result) => {
  //   alert(result);
  // };
  // const handleLogin = (googleData) => {
  //   console.log(googleData);
  // };
  // const DRESSES_CLIENT_ID =
  //   "514442198747 - km71bl7977f80el5gsih4mq7fu2kk6sq.apps.googleusercontent.com";
  return (
    <div className="home">
      <button className="login btn">Log in</button>
      {/* <div>
        <GoogleLogin
          clientId={DRESSES_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
          className="login"
        />
      </div> */}
      {/* <h1 className="h1">Borrow a dress</h1> */}
      {/* <img src={dresses} alt="" /> */}
    </div>
  );
}
export default Home;
