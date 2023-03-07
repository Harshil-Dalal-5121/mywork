
import "./App.css";

function App() {
  const cssStyle = {}; //This a way to mamipulate an empty object
  const TIME = new Date().getHours();
  const greeting = () => {
    if (TIME >= 1 && TIME < 12) {
      cssStyle.color = "blue"; //This a way to mamipulate an empty object
      return "Good Morning";
    } else if (TIME >= 12 && TIME < 14) {
      cssStyle.color = "orange";
      return "Good Afternoon";
    } else if (TIME >= 14 && TIME < 19) {
      cssStyle.color = "#537ca2";
      return "Good Evening";
    } else {
      cssStyle.color = "black";
      return "Good Night";
    }
  };

  return (
    <>
      <div>
        <h1>
          Hello Sir, <span style={cssStyle}>{greeting()}</span>{" "}
        </h1>
      </div>
    </>
  );
}

export default App;
