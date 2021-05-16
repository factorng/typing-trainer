import React from "react";
import getText from "../utils/api";
import currentTime from "../utils/currentTime";
import useKeyPress from "../hooks/useKeyPress";
import Preloader from "./Preloader";
import "./App.css";

function App() {
  const [text, setText] = React.useState("");
  const [currentChar, setCurrentChar] = React.useState(null);
  const [mistakeChar, setMistakeChar] = React.useState(false);
  const [mistakeCharsCount, setMistakesCharsCount] = React.useState(0);
  const [startTime, setStartTime] = React.useState(null);
  const [charsCount, setCharsCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  useKeyPress((key) => {
    if (!startTime) {
      setStartTime(currentTime());
    }

    if (currentChar === text.length - 1) {
      alert("succes");
      return;
    }
    if (key == text.charAt(currentChar)) {
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

  React.useEffect(() => {
    setIsLoading(true);
    getText()
      .then((res) => {
        setText(res);
        setCurrentChar(0);
        setIsLoading(false);
      })
      .catch((err) => console.log(err)); // work with errors
  }, []);

  const getTypingSpeed = () => {
    if (charsCount < 2) return 0;
    else return (charsCount / ((currentTime() - startTime) / 60000)).toFixed(0);
  };

  const getTypingAccuracy = () => {
    if (!mistakeCharsCount) return 100;
    if (!charsCount) return 0;
    else return (100 - (mistakeCharsCount / charsCount) * 100).toFixed(0);
  };

  const resetProgress = () => {
    setCurrentChar(null);
    setMistakeChar(false);
    setMistakesCharsCount(0);
    setStartTime(null);
    setCharsCount(0);
  };

  const getAnotherText = () => {
    resetProgress();
    setIsLoading(true);
    getText()
      .then((res) => {
        setText(res);
        setCurrentChar(0);
        setIsLoading(false);
      })
      .catch((err) => console.log(err)); // work with errors
  };

  return (
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
            <spam>{text.substring(currentChar + 1, text.length)}</spam>
          </>
        )}
      </section>
      <section className="info-and-controlls">
        <div className="statistic">
          <p className="statistic-item">
            Chars per minute{" "}
            <span className="statistic-item__higlighted">
              {getTypingSpeed()}
            </span>
          </p>
          <p className="statistic-item">
            Accuracy{" "}
            <span className="statistic-item__higlighted">
              {getTypingAccuracy()}%
            </span>
          </p>
        </div>
        <div className="controlls">
          <button onMouseDown={resetProgress} className="controlls__button">
            start over
          </button>
          <button onMouseDown={getAnotherText} className="controlls__button">
            get another text
          </button>
        </div>
      </section>
    </div>
  );
}
// 9/10*100 =
export default App;
