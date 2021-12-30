import "./App.css";

function App() {
  let arr = [1, 2, 3];

  const show = () => {
    arr.forEach((i) => {
      i = i + 1;
      console.log(i);
    });
  };
  return <div className="App">{show()}</div>;
}

export default App;
