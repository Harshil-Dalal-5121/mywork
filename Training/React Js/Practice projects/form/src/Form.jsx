import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const displayName = (event) => {
    const newName = document.getElementById("name").value; //For displaying on click
    // const name = event.target.value; //For displaying on change
    // OnChange passes an object whenever a change occurs in the input text , which can be accessed using event or any keyword
    // setName(name);
    setName(newName);
  };

  return (
    <>
      <form>
        <h1>Hello {name}</h1>
        <input
          type="text"
          className="ip-text"
          id="name"
          // onChange={displayName}
        />
        <button onClick={displayName}>Submit</button>
      </form>
    </>
  );
};

export default Form;
