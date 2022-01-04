import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dresses from "./components/Dresses";
import Header from "./components/Header";
import MyItems from "./components/MyItems";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";
import { useState, useEffect } from "react";
import dressesApi from "./api";

import Dress from "./components/Dress";
// import Wishlist from './components/'

function App() {
  const [loading, setLoading] = useState(false);
  const [dresses, setDresses] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetching = async () => {
      try {
        const { data } = await dressesApi.get("dresses");
        setLoading(false);

        setDresses(data);
      } catch (e) {
        throw e.messege;
      }
    };
    fetching();
  }, []);

  const [wishlist, setWishlist] = useState([]);
  const addToWishlist = (dress) => {
    if (!wishlist.includes(dress)) {
      const arr = [...wishlist, dress];

      setWishlist(arr);
    }
    console.log(wishlist);
  };

  return (
    <div className="App">
      {loading && <h3>Loading...</h3>}
      <Router>
        <Header />
        <Switch>
          <>
            <Route exact path="/" component={Home} />
            <Route path="/dresses">
              {dresses && (
                <Dresses dresses={dresses} addToWishlist={addToWishlist} />
              )}
            </Route>
            <Route path="/my-items">
              <MyItems items={dresses} />
            </Route>
            <Route path="/dress/:id" exact component={Dress} />
            <Route path="/wishlist">
              <Wishlist wishlist={wishlist} />
            </Route>
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
