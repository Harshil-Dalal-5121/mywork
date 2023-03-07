import React, { useState } from "react";
import TextField from "../components/TextField";

const initialState = {
  userName: "",
  email: "",
  password: "",
};
const Form = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const id = document.getElementById("username");
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    console.log(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm(values));
    if (Object.keys(errors).length === 0) {
      setValues(initialState);
    }
  };

  const validateForm = (values) => {
    const error = {};
    var regexUser = /^[A-za-z ]{3,100}$/;
    var regexEmail = /^[A-za-z_0-9]{3,}@[A-za-z]{3,}[.]{1}[A-za-z.]{2,6}$/;
    var regexPassword = /^(?=.*[0-9])[a-zA-Z0-9]{8,}$/;

    if (!values.userName) {
      error.userName = "Username is required";
    } else if (!regexUser.test(values.userName)) {
      error.userName = "Username is invalid";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regexEmail.test(values.email)) {
      error.email = "Email is invalid";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (!regexPassword.test(values.password)) {
      error.password = "Password is invalid";
    }
    return error;
  };

  return (
    <>
      <div className="container">
        <legend>
          <h1>Registration Form</h1>
        </legend>
        <form id="myForm" onSubmit={handleSubmit}>
          <TextField
            label="UserName"
            type="text"
            name="userName"
            value={values.userName}
            onChange={handleChange}
            error={errors.userName}
            helperText={
              errors.userName || "Username must be atleast 3 character"
            }
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email || "Enter email here !"}
          />
          <TextField
            label="Password"
            type="text"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            helperText={
              errors.password ||
              "Password must be 8 character and contain a number"
            }
          />
          <div className="row mb-3">
            <label htmlFor="city" className="col-sm-2 col-form-label">
              City Of Employment :
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Enter your City Of Employment"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="webServer" className="col-sm-2 col-form-label">
              Web Server :
            </label>
            <select className="col-sm-6" aria-label="Default select example">
              <option defaultValue> ----Choose A Server----</option>
              <option value="1">Apache</option>
              <option value="2">Jagsaw</option>
              <option value="3">IIS</option>
              <option value="4">lightpad</option>
            </select>
          </div>
          <fieldset className="row mb-3">
            <legend className="col-form-label col-sm-2 pt-0">
              Please specify your Role :
            </legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Admin
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="gridRadios2">
                  Engineer
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios3"
                  value="option3"
                />
                <label className="form-check-label" htmlFor="gridRadios3">
                  Manager
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios4"
                  value="option4"
                />
                <label className="form-check-label" htmlFor="gridRadios4">
                  Guest
                </label>
              </div>
            </div>
          </fieldset>
          <div className="row mb-3">
            <label htmlFor="signIn" className="col-sm-2 col-form-label">
              Single sign-on to the following :
            </label>

            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Mail
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck2"
                />
                <label className="form-check-label" htmlFor="gridCheck2">
                  Payroll
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck3"
                />
                <label className="form-check-label" htmlFor="gridCheck3">
                  Self-Service
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="btn m-auto btn-primary col-sm-3">
            Login
          </button>
          <br />
        </form>
      </div>
    </>
  );
};

export default Form;
