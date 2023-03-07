import React, { useState } from "react";
import AllMatch from "./AllMatch";
import NoMatch from "./NoMatch";

const SlotMachine = () => {
  const x = ["😄", "😆", "🎅"][Math.floor(Math.random() * 3)];
  const y = ["😄", "😆", "🎅"][Math.floor(Math.random() * 3)];
  const z = ["😄", "😆", "🎅"][Math.floor(Math.random() * 3)];

  const [currentX, setNewX] = useState(x);
  const [currentY, setNewY] = useState(y);
  const [currentZ, setNewZ] = useState(z);

  const handleRetry = () => {
    let newX = ["😄", "😆", "🎅"][Math.floor(Math.random() * 3)];
    let newY = ["😄", "😆", "🎅"][Math.floor(Math.random() * 3)];
    let newZ = ["😄", "😆", "🎅"][Math.floor(Math.random() * 3)];
    setNewX(newX);
    setNewY(newY);
    setNewZ(newZ);
  };
  if (x === y && y === z) {
    return <AllMatch x={x} y={y} z={z} handleRetry={handleRetry} />;
  } else {
    return <NoMatch x={x} y={y} z={z} handleRetry={handleRetry} />;
  }
};

export default SlotMachine;
