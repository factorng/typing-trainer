import React from "react";
import Preloader from "./Preloader";

function Text({ text, mistakeChar, currentChar, isLoading }) {
  if (isLoading) {
      return (
          <section className="text">
              <Preloader />;
          </section>
      );
  }
  return (
    <section className="text">
      <div>
        <span style={{ color: "green" }}>{text.substring(0, currentChar)}</span>
        {mistakeChar ? (
          <span className="text__cursor_mistake">
            {text.charAt(currentChar)}
          </span>
        ) : (
          <span className="text__cursor">{text.charAt(currentChar)}</span>
        )}
        <span>{text.substring(currentChar + 1, text.length)}</span>
      </div>
    </section>
  );
}

export default Text;
