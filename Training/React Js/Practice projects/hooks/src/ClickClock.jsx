import React, { useState } from "react";

const ClickClock = () => {
  const Time = new Date().toLocaleTimeString();
  const [cTime, nTime] = useState(Time);

  const clickOFButton = () => {
    let newTime = new Date().toLocaleTimeString();
    nTime(newTime);
  };
  return (
    <>
      <h1>{cTime}</h1>
      <button onClick={clickOFButton}>Click Me </button>
    </>
  );
};
export default ClickClock;
