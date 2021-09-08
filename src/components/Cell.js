import React from "react";

//Methods
import { mineColour } from "../util/mineColours";

//Components
import Circle from "./Circle";

//Stylesheet
import "../App.css";

function Cell({ details, updateFlag, revealCell }) {
  const cellstyle = {
    background: details.revealed
      ? details.value === "X"
        ? mineColour()
        : bombChexPattern(details.x, details.y)
      : chexPattern(details.x, details.y),
    color: numColorCode(details.value),
  };

  return (
    <div
      onContextMenu={(e) => updateFlag(e, details.x, details.y)}
      onClick={() => revealCell(details.x, details.y)}
      style={cellstyle}
      className="cellStyle"
    >
      {!details.revealed && details.flagged ? (
        "🚩"
      ) : details.revealed && details.value !== 0 ? (
        details.value === "X" ? (
          <Circle />
        ) : (
          details.value
        )
      ) : (
        ""
      )}
    </div>
  );
}

//Details of the chequered colour pattern when blocks ARE revealed.
const bombChexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#e5c29f";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#d7b899";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#d7b899";
  } else {
    return "#e5c29f";
  }
};

//Details of the chequered colour pattern when blocks ARE NOT revealed.
const chexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "lightcyan";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "lightskyblue";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "lightskyblue";
  } else {
    return "lightcyan";
  }
};

//This sets the colour of the numbers when they are revealed.
const numColorCode = (num) => {
  if (num === 1) {
    return "#1976d2";
  } else if (num === 2) {
    return "#388d3c";
  } else if (num === 3) {
    return "#d33030";
  } else if (num === 4) {
    return "#7c21a2";
  } else if (num === 5) {
    return "#1976d2";
  } else if (num === 6) {
    return "#1976d2";
  } else {
    return "white";
  }
};

export default Cell;
