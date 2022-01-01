import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dresses from "./components/Dresses";
import Header from "./components/Header";
import MyItems from "./components/MyItems";
// import Wishlist from './components/'

function App() {
  return (
    <div className="App">
      Borrow a dress App
      <Router>
        <Header />
        <div>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/dresses" component={Dresses} />
          <Route path="/dresses" component={MyItems} />
          {/* <Route path="/wishlist" component={Wishlist} /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
