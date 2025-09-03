import { useEffect } from "react";
import "./App.css";
import DateCounter from "./DateCounter";
import Header from "./Header";
import MainSec from "./MainSec";

function App() {
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error"));
  }, []);

  return (
    <>
      <div className="app">
        <Header />

        <MainSec className="main">
          <p>1/15</p>
          <p>Question?</p>
        </MainSec>
      </div>
    </>
  );
}

export default App;
