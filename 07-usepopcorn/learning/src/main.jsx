import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StarRating from "./components/StarRating.jsx";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating color="blue" onSetRating={setMovieRating} />
      <p>This movies was rated {movieRating} stars </p>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={10}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> */}

    {/* <Test /> */}
  </React.StrictMode>
);
