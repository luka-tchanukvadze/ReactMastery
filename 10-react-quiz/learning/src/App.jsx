import "./App.css";
import DateCounter from "./DateCounter";
import Header from "./Header";
import MainSec from "./MainSec";

function App() {
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
