import React from "react";
import HelperText from "./HelperText";
import Input from "./Input";
import InputLabel from "./InputLabel";

const TextField = (props) => {
  const { type, name, value, onChange, label, helperText, error } = props;
  return (
    <>
      <div className="row mb-3">
        <InputLabel htmlFor={name} label={label} />
        <div className="col-sm-6">
          <Input
            type={type}
            id={name}
            className="form-control"
            name={name}
            value={value}
            onChange={onChange}
          />
          <HelperText helperText={helperText} error={error}></HelperText>
        </div>
      </div>
    </>
  );
};

export default TextField;
