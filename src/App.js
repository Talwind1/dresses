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

function App() {
  const [loading, setLoading] = useState(false);
  const [dresses, setDresses] = useState(null);
  // const userId = 307840413;
  const [wishlist, setWishlist] = useState([]);
  const [userId, setUserId] = useState();

  useEffect(() => {
    //get dresses data
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

  const outerFetch = async () => {
    //function for rendering the props
    console.log("its happen!");
    try {
      const { data } = await dressesApi.get("dresses");
      setLoading(false);

      setDresses(data);
    } catch (e) {
      throw e.messege;
    }
  };

  const addToWishlist = async (dress) => {
    setLoading(true);
    try {
      if (!wishlist.find((el) => el.id === dress.id)) {
        const { data } = await dressesApi.post("/wishlist", dress);
        setLoading(false);
        let copy = [...wishlist];
        copy.push(data);
        console.log(copy);
        setWishlist(copy);
      }
    } catch (e) {
      throw console.error(e.messege);
    }
  };
  const setUser = (userId) => {
    setUserId(userId);
  };

  return (
    <div className="App">
      {loading && <h3>Loading...</h3>}
      <Router>
        <Header />
        <Switch>
          <>
            <Route exact path="/">
              <Home setUser={setUser} />
            </Route>
            <Route path="/dresses">
              {dresses && (
                <Dresses
                  addToWishlist={addToWishlist}
                  outerFetch={outerFetch}
                />
              )}
            </Route>
            <Route path="/my-items">
              <MyItems
                items={dresses}
                outerFetch={outerFetch}
                userId={userId}
              />
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
