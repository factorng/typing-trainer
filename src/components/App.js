import React from "react";
import { getTextFromAPI } from "../utils/api";
import currentTime from "../utils/currentTime";
import useKeyPress from "../hooks/useKeyPress";
import useInterval from "../hooks/useInterval";
import "./App.css";
import Popup from "./Popup";
import Info from "./Info";
import Text from "./Text";

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
    getTextFromAPI()
      .then((res) => {
        setText(res.slice(0, 10)); //reduce text size for testing
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
    // condition to prevent NaN while loading
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
      <Popup
        accuracy={getTypingAccuracy()}
        speed={typingSpeed}
        handleStartOver={getText}
        handleClose={closeCompleteLessonPopup}
        isOpen={isCompleteLessonPopupOpen}
      />

      <div className="wrapper">
        
          <Text
            text={text}
            mistakeChar={mistakeChar}
            currentChar={currentChar}
            isLoading={isLoading}
          />
        <Info
          typingSpeed={typingSpeed}
          getTypingAccuracy={getTypingAccuracy}
          resetProgress={resetProgress}
          textUpdate={getText}
        />
      </div>
    </>
  );
}
export default App;
