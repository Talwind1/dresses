import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dresses from "./components/Dresses";
import Header from "./components/Header";
import MyItems from "./components/MyItems";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import dressesApi from "./api";
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

  return (
    <div className="App">
      {loading && <h3>Loading...</h3>}
      <Router>
        <Header />
        <Switch>
          <>
            <Route exact path="/" component={Home} />
            <Route path="/dresses">
              {dresses && <Dresses dresses={dresses} />}
            </Route>
            <Route path="/my-items">
              <MyItems items={dresses} />
            </Route>
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
