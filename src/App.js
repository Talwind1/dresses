import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dresses from "./components/Dresses";
import Header from "./components/Header";
import MyItems from "./components/MyItems";
import Home from "./components/Home";
// import Wishlist from './components/'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <>
          <Route exact path="/" component={Home} />
          <Route path="/dresses" component={Dresses} />
          <Route path="/my-items" component={MyItems} />
          {/* <Route path="/wishlist" component={Wishlist} /> */}
        </>
      </Router>
    </div>
  );
}

export default App;
