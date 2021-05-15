import React from "react";
import getText from "./utils/api";
import useKeyPress from "./hooks/useKeyPress";

function App() {
  const [text, setText] = React.useState("");
  useKeyPress((key) => console.log(key));
  React.useEffect(() => {
    getText()
      .then((res) => setText(res))
      .catch((err) => console.log(err)); // work with errors
  }, []);
  return <div>{text}</div>;
}

export default App;
