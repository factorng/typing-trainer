import React from "react";
import getText from "./utils/api";
import useKeyPress from "./hooks/useKeyPress";

function App() {
  const [text, setText] = React.useState("");
  const [currentChar, setCurrentChar] = React.useState(null);

  useKeyPress((key) => {
    if (key == text.charAt(currentChar)) {
      console.log("right");
      setCurrentChar(currentChar + 1);
    } else {
      console.log("wrong");
    }
  });
  React.useEffect(() => {
    getText()
      .then((res) => {
        setText(res);
        setCurrentChar(0);
      })
      .catch((err) => console.log(err)); // work with errors
  }, []);
  return (
    <>
      <div>
        <span style={{ color: "green" }}>{text.substring(0, currentChar)}</span>
        <spam>{text.substring(currentChar, text.length)}</spam>
      </div>
    </>
  );
}

export default App;
