import { useEffect, useReducer } from "react";
import "./App.css";
// import DateCounter from "./components/DateCounter";
import Header from "./components/Header";
import MainSec from "./components/MainSec";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";
import Footer from "./components/Footer";
import { useQuiz } from "./context/QuizContext";

function App() {
  const {
    questions,
    status,
    index,
    answer,
    points,
    highscore,
    secondsRemaining,
    numQuestions,
    maxPossiblePoints,
    dispatch,
  } = useQuiz();

  return (
    <>
      <div className="app">
        <Header />

        <MainSec className="main">
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}
          {status === "active" && (
            <>
              <Progress
                index={index}
                numQuestions={numQuestions}
                points={points}
                maxPossiblePoints={maxPossiblePoints}
                answer={answer}
              />
              <Question
                question={questions[index]}
                dispatch={dispatch}
                answer={answer}
              />
              <Footer>
                <Timer
                  dispatch={dispatch}
                  secondsRemaining={secondsRemaining}
                />
                <NextButton
                  dispatch={dispatch}
                  answer={answer}
                  numQuestions={numQuestions}
                  index={index}
                />
              </Footer>
            </>
          )}

          {status === "finished" && (
            <FinishScreen
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              highscore={highscore}
              dispatch={dispatch}
            />
          )}
        </MainSec>
      </div>
    </>
  );
}

export default App;
