import React, { useState, useEffect } from "react";

//Stylesheet
import "../App.css";

export default function Modal({ restartGame }) {
  const [render, setRender] = useState(false);
  useEffect(() => {
    //Modal will be displayed after 1 second when game has run its course
    setTimeout(() => {
      setRender(true);
    }, 1000);
  }, []);
  return (
    <div
      className="Modal"
      style={{
        opacity: render ? 1 : 0,
      }}
    >
      <div id="gameOverImage"></div>
      <div className="gameOver">Game Over</div>
      {/* Once the Modal pops up, there will be an option for the user to 
      restart the game */}
      <div className="tryAgain" onClick={() => restartGame()}>
        Click Here to Play Again
      </div>
    </div>
  );
}
