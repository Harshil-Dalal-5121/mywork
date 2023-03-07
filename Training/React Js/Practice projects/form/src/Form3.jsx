import React, { useState } from "react";

const Form3 = () => {
  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormValues((prev) => {
      if (name === "userName") {
        return { userName: value, email: prev.email, password: prev.password };
      } else if (name === "email") {
        return {
          userName: prev.userName,
          email: value,
          password: prev.password,
        };
      } else {
        return { userName: prev.userName, email: prev.email, password: value };
      }
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1> Registration Form</h1>
        <input
          type="text"
          onChange={inputEvent}
          name="userName"
          value={formValues.userName}
        />
        <br />
        <input
          type="email"
          onChange={inputEvent}
          name="email"
          value={formValues.email}
        />
        <br />
        <input
          type="password"
          onChange={inputEvent}
          name="password"
          value={formValues.password}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form3;
