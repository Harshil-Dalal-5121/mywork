import React, { useState } from "react";
// import AutoClock from "./AutoClock"; 
// import ClickClock from "./ClickClock";

const App = () => {
  const [bg, setBg] = useState("blue");
  const [name, setName] = useState("Click to change color");
  const bgChange = () => {
    let purple = "purple";
    setBg(purple);
    let changeColor = "Color Changed";
    setName(changeColor);
  };
  const oldBg = () => {
    setBg("blue");
    let changeColor = "Color Changed back to normal";
    setName(changeColor);
  };

  return (
    <>
      {/* <ClickClock />
      <AutoClock /> */}
      <div className={bg}>
        <button onClick={bgChange} onDoubleClick={oldBg}>
          {name}
        </button>
      </div>
    </>
  );
};

export default App;
