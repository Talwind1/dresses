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
  const userId = 307840413;
  const [wishlist, setWishlist] = useState([]);
  // const [userData, setUserData] = useState({
  //   id: null,
  //   wishlist: [],
  //   items: [],
  // });

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

  // useEffect(() => {
  //   //get user wishlist data
  //   console.log("hiiiii");
  //   setLoading(true);
  //   const fetching = async () => {
  //     try {
  //       const { data } = await dressesApi.get(`users`);
  //       setLoading(false);
  //       console.log("user", data);
  //       let obj = data.find((element) => {
  //         return element.id === userId.toString();
  //       });
  //       // console.log(obj);
  //       setUserData(obj);
  //       // console.log(userData);

  //       setWishlist(obj.wishlist);
  //       wishlist && console.log(wishlist);
  //       // outerFetch();
  //     } catch (e) {
  //       throw e.messege;
  //     }
  //   };
  //   fetching();
  // }, []);

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
    // console.log(dress);
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

  // if (wishlist) {
  //   if (!wishlist.find((element) => element.id === dress.id)) {
  //     let newData = userData;
  //     newData.wishlist.push(dress);
  //     console.log(newData);
  //     const { data } = await dressesApi.put(`users/${userData.id}`);
  //     setUserData(data);
  //     setWishlist(data.wishlist);
  //   }
  // }

  // try {
  //   const { data } = await dressesApi.get("users");
  //   setLoading(false);
  //   console.log(data);
  //   let obj = data.find((element) => {
  //     return element.id === userId;
  //   });
  //   // if(obj.wishlist.inclu
  //   if (obj.wishlist.find((element) => element.id === dress.id) === -1) {
  //     const data = await dressesApi.post("users", dress);
  //     console.log(data);
  //   }

  // setWishlist(obj.wishlist);

  // wishlist && console.log(wishlist);
  // outerFetch();
  // } catch (e) {
  //   throw e.messege;
  // }
  // }};
  // const existInWishlist = ;

  //   if (!wishlist.includes(dress)) {
  //     const arr = [...wishlist, dress];

  //     setWishlist(arr);
  //   } else {
  //     // wishlist.remove;
  //   }
  //   console.log(wishlist);
  // };

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
                <Dresses
                  addToWishlist={addToWishlist}
                  outerFetch={outerFetch}
                />
              )}
            </Route>
            <Route path="/my-items">
              <MyItems items={dresses} outerFetch={outerFetch} />
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
