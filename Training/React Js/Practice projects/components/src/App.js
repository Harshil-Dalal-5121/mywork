import React from "react";
import "./index.css";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import List from "./List";
import * as calc from "./Calc";

function App() {
  return (
    <>
    <Heading/>
    <Paragraph/>
    <List />
      <h1>Calculator</h1>
      <ol>
        <li>
          Addition on 5 & 4 is{" "}
          {calc.add(5.696451651, 4.335165165).toPrecision(5)}
        </li>
        <li>
          Subtraction on 5 & 4 is{" "}
          {calc.sub(5.696451651, 4.335165165).toPrecision(5)}
        </li>
        <li>
          Multiplication on 5 & 4 is{" "}
          {calc.mult(5.696451651, 4.335165165).toPrecision(5)}
        </li>
        <li>
          Division on 5 & 4 is{" "}
          {calc.div(5.696451651, 4.335165165).toPrecision(5)}
        </li>
      </ol>
    </>
  );
}

export default App;
