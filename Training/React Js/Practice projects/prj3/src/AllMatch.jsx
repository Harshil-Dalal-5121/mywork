import React from "react";

function AllMatch({ x, y, z, handleRetry }) {
  console.log(`win`);
  return (
    <>
      <div className="container">
        <h1>
          {x}
          {y}
          {z}
        </h1>
        <h1>🎆🎆 Congratulations 🎆🎆 </h1>
        <button onClick={handleRetry}>New Game</button>
      </div>
    </>
  );
}

export default AllMatch;
