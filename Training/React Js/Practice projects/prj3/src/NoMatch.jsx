import React from "react";

function NoMatch({ x, y, z, handleRetry }) {
  console.log(`Lose`);

  return (
    <>
      <div className="container">
        <h1>
          {x}
          {y}
          {z}
        </h1>
        <h1>Try Again</h1>
        <button onClick={handleRetry}>Retry</button>
      </div>
    </>
  );
}

export default NoMatch;
