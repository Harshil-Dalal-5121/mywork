import React, { useState } from "react";

const AutoClock = () => {
  const Time = new Date().toLocaleTimeString();
  const [cTime, nTime] = useState(Time);

  const updateTime = () => {
    let newTime = new Date().toLocaleTimeString();
    nTime(newTime);
  };

  setInterval(updateTime, 1000);
  return (
    <>
      <h1>{cTime}</h1>
    </>
  );
};

export default AutoClock;
