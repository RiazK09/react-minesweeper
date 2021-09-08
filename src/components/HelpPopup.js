import React from "react";

//Stylesheet
import "../App.css";

function HelpPopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {/* Added onClick event listener to close the Help Popup Menu */}
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        <h1>Game Rules</h1>
        <ul>
          <li>
            The purpose of this game is to reveal all the open areas on the
            board, without hitting any of the bombs.{" "}
          </li>
          <li>
            Use the left click button on the mouse to reveal a space on the
            grid. Keep in mind - if you hit a bomb, you lose.
          </li>
          <li>
            The numbers on the board represent how many bombs are adjacent to a
            square Eg: if a square has a '2' on it, then there are 2 bombs next
            to the square.
          </li>
          <li>
            The bombs could be below, above, left, right or diagonal to the
            square.
          </li>
          <li>
            If you suspect a bomb, use the right mouse click to flag it. Note:
            There are 15 bombs placed on the board.
          </li>
          <li>
            In order to win the game, avoid all the bombs by flagging it &
            expose all the empty spaces.
          </li>
        </ul>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default HelpPopup;
