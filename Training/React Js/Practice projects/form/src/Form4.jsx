import React, { useState } from "react";

const Form4 = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validateForm(formValues));
    console.log(formValues);
    setFormValues(initialValues);
  };

  const validateForm = (formValues) => {
    const errors = {};
    var regexUser = /^[A-za-z ]{3,100}$/;
    var regexEmail = /^[A-za-z_0-9]{3,}@[A-za-z]{3,}[.]{1}[A-za-z.]{2,6}$/;
    var regexPassword = /^(?=.*[0-9])[a-zA-Z0-9]{8,}$/;

    if (!formValues.userName) {
      errors.userName = "Username is required";
    } else if (!regexUser.test(formValues.userName)) {
      errors.userName = "Username is invalid";
    }
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!regexEmail.test(formValues.email)) {
      errors.email = "Email is invalid";
    }
    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (!regexPassword.test(formValues.password)) {
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
        <form id="myForm" onSubmit={handleSubmit}>
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
                value={formValues.userName}
                onChange={handleChange}
              />
              <span className="text-danger font-weigth-bold">
                {formErrors.userName}
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
                value={formValues.email}
                onChange={handleChange}
              />
              <span className="text-danger font-weigth-bold">
                {formErrors.email}
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
                value={formValues.password}
                onChange={handleChange}
              />
              <span className="text-danger font-weigth-bold">
                {formErrors.password}
              </span>
            </div>
          </div>
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

export default Form4;
