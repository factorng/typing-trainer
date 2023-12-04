import React from "react";

function Info({ typingSpeed, getTypingAccuracy, resetProgress, textUpdate }) {
  return (
    <section className="info-and-controlls">
      <div className="statistic">
        <p className="statistic-item">
          Chars per minute
          <span className="statistic-item__higlighted"> {typingSpeed}</span>
        </p>
        <p className="statistic-item">
          Accuracy{" "}
          <span className="statistic-item__higlighted">
            {getTypingAccuracy()} %
          </span>
        </p>
      </div>
      <div className="controlls">
        <button onMouseDown={resetProgress} className="controlls__button">
          start over
        </button>
        <button onMouseDown={textUpdate} className="controlls__button">
          get another text
        </button>
      </div>
    </section>
  );
}

export default Info;