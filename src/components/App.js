import React from "react";
import textApi from "../utils/api";
import currentTime from "../utils/currentTime";
import useKeyPress from "../hooks/useKeyPress";
import useInterval from "../hooks/useInterval";
import Preloader from "./Preloader";
import "./App.css";
import Popup from "./Popup";

function App() {
  const [text, setText] = React.useState("");
  const [currentChar, setCurrentChar] = React.useState(null);
  const [mistakeChar, setMistakeChar] = React.useState(false);
  const [mistakeCharsCount, setMistakesCharsCount] = React.useState(0);
  const [startTime, setStartTime] = React.useState(null);
  const [charsCount, setCharsCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isCompleteLessonPopupOpen, setIsCompleteLessonPopupOpen] =
    React.useState(false);
  const [typingSpeed, setTypingSpeed] = React.useState(0);
  const [isLessonDone, setIsLessonDone] = React.useState(false);

  useKeyPress((key) => {
    if (!startTime) {
      setStartTime(currentTime());
    }

    if (currentChar === text.length - 1) {
      setIsLessonDone(true);
      setIsCompleteLessonPopupOpen(true);
      return;
    }
    if (key === text.charAt(currentChar)) {
      setMistakeChar(false);
      setCurrentChar(currentChar + 1);
      setCharsCount(charsCount + 1);
      return;
    }
    if (!mistakeChar) {
      // prevent count mistakeCharsCount in case of pressing wrong key many times in a row
      setMistakesCharsCount(mistakeCharsCount + 1);
      setMistakeChar(true);
      return;
    }
  });

  const getText = React.useCallback(() => {
    resetProgress();
    setIsLoading(true);
    textApi()
      .then((res) => {
        setText(res);
        setCurrentChar(0);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    getText();
  }, [getText]);

  useInterval(() => {
    !isLessonDone && setTypingSpeed(getTypingSpeed());
  }, 1000);

  const getTypingSpeed = () => {
    if (charsCount < 2) return 0;
    else return (charsCount / ((currentTime() - startTime) / 60000)).toFixed(0);
  };

  const getTypingAccuracy = () => {
    // condition is to prevent NaN while loading
    return isLoading
      ? "100.00"
      : (100 - (mistakeCharsCount / text.length) * 100).toFixed(2);
  };

  const resetProgress = () => {
    setCurrentChar(0);
    setMistakeChar(false);
    setMistakesCharsCount(0);
    setStartTime(null);
    setCharsCount(0);
  };

  const closeCompleteLessonPopup = () => setIsCompleteLessonPopupOpen(false);

  return (
    <>
      {isCompleteLessonPopupOpen ? (
        <Popup
          accuracy={getTypingAccuracy()}
          speed={typingSpeed}
          handleStartOver={getText}
          handleClose={closeCompleteLessonPopup}
        />
      ) : (
        ""
      )}
      <div className="wrapper">
        <section className="text">
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              <span style={{ color: "green" }}>
                {text.substring(0, currentChar)}
              </span>
              {mistakeChar ? (
                <span className="text__cursor_mistake">
                  {text.charAt(currentChar)}
                </span>
              ) : (
                <span className="text__cursor">{text.charAt(currentChar)}</span>
              )}
              <span>{text.substring(currentChar + 1, text.length)}</span>
            </>
          )}
        </section>
        <section className="info-and-controlls">
          <div className="statistic">
            <p className="statistic-item">
              Chars per minute
              <span className="statistic-item__higlighted"> {typingSpeed}</span>
            </p>
            <p className="statistic-item">
              Accuracy
              <span className="statistic-item__higlighted">
                {" "}
                {getTypingAccuracy()}%
              </span>
            </p>
          </div>
          <div className="controlls">
            <button onMouseDown={resetProgress} className="controlls__button">
              start over
            </button>
            <button onMouseDown={getText} className="controlls__button">
              get another text
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
export default App;
