import React from "react";

//Stylesheet
import "../App.css";

export default function Circle() {
  return (
    <div
      //In-line styling utilised
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="Circle"></div>
    </div>
  );
}
