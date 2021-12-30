import logo from "./logo.svg";
import "./App.css";

function App() {
  let arr = [1, 2, 3];

  const show = () => {
    arr.forEach((i) => {
      i = i + 1;
    });
  };
  return <div className="App">{show()}</div>;
}

export default App;
