import React from "react";

const useKeyPress = (callback) => {
  const [keyPressed, setKeyPressed] = React.useState();

  React.useEffect(() => {
    const keyDownHandler = ({ key }) => {
      if (keyPressed !== key && key.length === 1) {
        setKeyPressed(key);
        callback && callback(key);
      }
    };

    const keyUpHandler = () => {
      setKeyPressed(null);
    };

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
  });

  return keyPressed;
};

export default useKeyPress;
