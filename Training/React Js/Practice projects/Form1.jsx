import React, { useState } from "react";
// import TextField from "./TextField";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

const Form = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm(values));
    setValues(initialState);
  };

  const validateForm = (values) => {
    const errors = {};
    var regexUser = /^[A-za-z ]{3,100}$/;
    var regexEmail = /^[A-za-z_0-9]{3,}@[A-za-z]{3,}[.]{1}[A-za-z.]{2,6}$/;
    var regexPassword = /^(?=.*[0-9])[a-zA-Z0-9]{8,}$/;

    const { userName, email, password } = values;
    if (!userName) {
      errors.userName = "Username is required";
    } else if (!regexUser.test(userName)) {
      errors.userName = "Username is invalid";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!regexEmail.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (!regexPassword.test(password)) {
      errors.password = "Password is invalid";
    }

    return errors;
  };
  return (
    <>
      <div className="container">
        <legend>
          <h1>Registration Form</h1>
        </legend>
        <form onSubmit={handleSubmit}>
          {/* <TextField
            htmlFor="userName"
            fieldTitle="UserName :"
            type="text"
            id="userName"
            name="userName"
            value={values.userName}
            onChange={handleChange}
            errorMessage={errors.userName}
          />
          <TextField
            htmlFor="email"
            fieldTitle="Email :"
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            errorMessage={errors.email}
          />
          <TextField
            htmlFor="password"
            fieldTitle="Password :"
            type="text"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            errorMessage={errors.password}
          /> */}
          <div className="row mb-3">
            <label
              htmlFor="userName"
              className="col-sm-2 font-weigth-bold col-form-label"
            >
              UserName :
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                id="userName"
                className="form-control"
                name="userName"
                placeholder="Enter your Username"
                value={values.userName}
                onChange={handleChange}
              />
              <span className="text-danger font-weigth-bold">
                {errors.userName}
              </span>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email :
            </label>
            <div className="col-sm-6">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter your Email"
                value={values.email}
                onChange={handleChange}
              />
              <span className="text-danger font-weigth-bold">
                {errors.email}
              </span>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password :
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                name="password"
                id="password"
                placeholder="Enter your Password"
                value={values.password}
                onChange={handleChange}
              />
              <span className="text-danger font-weigth-bold">
                {errors.password}
              </span>
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="webServer" className="col-sm-2 col-form-label">
              Web Server :
            </label>
            <select className="col-sm-6" aria-label="Default select example">
              <option defaultValue> ----Choose A Server---- </option>
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
        </form>
      </div>
    </>
  );
};

export default Form;
