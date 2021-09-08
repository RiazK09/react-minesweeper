import React, { useState, useEffect } from "react";

//Stylesheet
import "../App.css";

let timeIntervalId;
export default function Timer() {
  let [time, setTime] = useState(0);

  useEffect(() => {
    function incrementTime() {
      setTimeout(() => {
        let newTime = time + 1;
        setTime(newTime);
      }, 1000);
    }
    incrementTime();
  }, [time]);

  console.log(timeIntervalId);
  return (
    <div className="Timer">
      <span className="clockIcon" role="img" aria-label="clock">
        ⏰
      </span>
      {time}
    </div>
  );
}
