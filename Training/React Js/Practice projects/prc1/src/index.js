import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// ReactDOM.render('What to show','When to Show','callback function')

const fname = "Harshil";
const lname = "Dalal";
const a = 500;
const b = 400;
const link = "https://www.google.com/";
const picture = "https://picsum.photos/200";
const red = {
  margin: "10px",
  textAlign: "center",
  textTransform: "uppercase",
  color: "rgb(1, 53, 150)",
  textShadow: "5px 5px 10px red",
};

ReactDOM.render(
  // <div>
  //   <h1>First react App using render</h1>
  //   <p>This allows us to use multiple JSX elements.</p>
  //   <a href="/some/valid/uri">Hello</a>
  // </div>,

  //~After react v16 it's possible for render() to return an array of elements.Its like declaring an array.
  // [
  //   <h1>First react App using render</h1>,
  //   <p>This allows us to use multiple JSX elements.</p>,
  //   <a href="/some/valid/uri">Hello</a>,
  // ],

  //~while using div we get one extra node which is a little bit time consuming,So instead we use React.Fragment or <> ... </>
  // <React.Fragment>
  //   <h1>First react App using render</h1>
  //   <p>This allows us to use multiple JSX elements.</p>
  //   <a href="/some/valid/uri">Hello</a>
  // </React.Fragment>

  //~Task - 1
  // <React.Fragment>
  //   <h1>Netflix</h1>
  //   <p>This are my favourite 5 series in Netflix</p>
  //   <ol>
  //     <li>The Boys</li>
  //     <li>F.R.I.E.N.D.S</li>
  //     <li>The Vampire diaries</li>
  //     <li>The Big bang Theory</li>
  //     <li>Mandolarian</li>
  //   </ol>
  // </React.Fragment>

  //~ JsX Expressions
  // <>
  //   <h1>
  //     My name is {fname + " " + lname}
  //*     {/* {Need to add space btw them or else it wil be harshildalal} */}
  //   </h1>
  //   <h1>
  //     My first name is {fname} and my last name is {lname}
  //   </h1>
  //   <h1>{`My first name is ${fname} and my last name is ${lname}`}</h1>
  //   <p>Addition of a and b is {a + b}</p>
  //   <p>
  //     Sqrt of {a} is {Math.sqrt(a)}
  //   </p>
  //   <p>
  //     Sqrt of {a} is rounded to {Math.floor(Math.sqrt(a))}
  //   </p>
  //   <p>
  //     Sqrt of {a} is rounded to {Math.ceil(Math.sqrt(a))}
  //   </p>
  //* {......} Js expreesion can only be used for variables and simple conditions
  // </>

  //~Task 2
  // <>
  //   <h1>My name is {`${fname} ${lname}`}</h1>
  //   <p>The Date today is = {new Date().toLocaleDateString()}</p>
  //   <p>The Time right now is = {`${new Date().toLocaleTimeString()}`}</p>
  // </>

  //* Jsx attributes : use camelCase in attributes.
  // <>
  //   <h1 contentEditable="true" className="" >My name is {`${fname} ${lname}`}</h1>
  //   <a href={link} target="_blank">
  //   <img src={picture} alt="img" /></a>
  // </>

  //~ Using CSS in Reactjs
  // <>
  //   <h1 className="heading">My name is {`${fname} ${lname}`}</h1>
  //   <div className="img_div">
  //     <img src={picture} alt="img" />
  //     <img src={picture} alt="img" />
  //     <img src={picture} alt="img" />
  //   </div>
  // </>

  //~ Two ways of writing inline CSS
  //* For writing inline Css, we need to create an object or in a JSX expression. Use camelCase instead of kabab-case
  <>
    <h1 style={red}> name is {`${fname} ${lname}`}</h1>
    <h1
      style={{
        margin: "10px",
        textAlign: "center",
        textTransform: "uppercase",
        color: "rgb(1, 53, 150)",
        textShadow: "5px 5px 10px red",
        fontFamily: "'Tilt Neon', cursive",
      }}
    >
     My name is {`${fname} ${lname}`}
    </h1>
    <div className="img_div">
      <img src={picture} alt="img" />
      <img src={picture} alt="img" />
      <img src={picture} alt="img" />
    </div>
  </>,
  // We can't use class as it is a reserved keyword in React.
  // We have to className in React.
  document.getElementById("root")
);

//!This line of code shows how React is used in the above line
// ReactDOM.render( React.createElement("h1", null, "First react App using render"), document.getElementById("root"));

//!No use of React
//  var a1 =document.createElement("h1");
//  a1.innerHTML="First react App without using render";
//  document.getElementById('root').appendChild(a1)f
