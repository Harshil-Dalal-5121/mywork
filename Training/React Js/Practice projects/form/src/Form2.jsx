import React, { useState } from "react";

const Form2 = () => {
  const [name, setName] = useState(""); //currentlly the value of the name is "" i.e. empty
  const [fullName, setFullName] = useState(""); //Now we kept fullname empty so that it doesnot show anything after Hello

  const onSubmit = (event) => {
    event.preventDefault();
    setFullName(name); //when the button is clicked the value stored in name is set as setFullName
  };
  const inputEvent = (event) => {
    const name = event.target.value; //When user passes any value an event is triggered and it is stored in this constant
    setName(name);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Hello {fullName}</h1>
        <input type="text" onChange={inputEvent} value={name} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form2;
