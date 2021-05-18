import React from "react";
import "./Popup.css";

export default function Popup({
  accuracy,
  speed,
  handleStartOver,
  handleClose,
}) {
  React.useEffect(() => {
    const escClose = (e) => e.key === "Escape" && handleClose();
    document.addEventListener("keydown", escClose);
    return () => document.removeEventListener("keydown", escClose);
  }, [handleClose]);

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h1 className="popup__header">Congratulatios!</h1>
        <h2 className="popup__header">Lesson completed</h2>
        <h3 className="popup__header">Your results:</h3>
        <p>Accuracy {accuracy}%</p>
        <p>Chars per minute {speed}</p>
        <button
          onClick={() => {
            handleStartOver();
            handleClose();
          }}
          className="popup__button_start-over"
        >
          start over
        </button>
        <button onClick={handleClose} className="popup__button_close">
          X
        </button>
      </div>
    </div>
  );
}
