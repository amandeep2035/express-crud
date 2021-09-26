import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [r, setR] = React.useState();

  React.useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        setR(data.result);
      });
  }, []); // <-- Have to pass in [] here!

  return (
    <div className="App">
      <h2>api call result:</h2>
      <h3>{r}</h3>
    </div>
  );
}

export default App;
