import React from "react";
import getText from "./utils/api";
import currentTime from "./utils/currentTime";
import useKeyPress from "./hooks/useKeyPress";

function App() {
  const [text, setText] = React.useState("");
  const [currentChar, setCurrentChar] = React.useState(null);
  const [mistakeChar, setMistakeChar] = React.useState(false);
  const [startTime, setStartTime] = React.useState(null);
  const [charsCount, setCharsCount] = React.useState(0);

  useKeyPress((key) => {
    if (!startTime) {
      setStartTime(currentTime());
    }
    setMistakeChar(false);
    if (currentChar === text.length - 1) {
      alert("succes");
    }
    if (key == text.charAt(currentChar)) {
      setCurrentChar(currentChar + 1);
      setCharsCount(charsCount + 1);
    } else {
      setMistakeChar(true);
    }
  });
  React.useEffect(() => {
    getText()
      .then((res) => {
        setText(res.substring(0, 40));
        setCurrentChar(0);
      })
      .catch((err) => console.log(err)); // work with errors
  }, []);
  return (
    <>
      <div>
        <span style={{ color: "green" }}>{text.substring(0, currentChar)}</span>
        {mistakeChar ? (
          <span
            style={{
              color: "red",
              backgroundColor: "lightgrey",
              border: "1px solid black",
            }}
          >
            {text.charAt(currentChar)}
          </span>
        ) : (
          <span
            style={{
              color: "purple",
              backgroundColor: "lightgrey",
              border: "1px solid black",
            }}
          >
            {text.charAt(currentChar)}
          </span>
        )}
        <spam>{text.substring(currentChar + 1, text.length)}</spam>
      </div>
      <div>
        <span>Chars per second </span>
        <span>
          {(charsCount / ((currentTime() - startTime) / 60000)).toFixed(0)}
        </span>
      </div>
    </>
  );
}

export default App;
