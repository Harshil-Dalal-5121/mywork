import React from "react";

const InputLabel = (props) => {
  const { name, label } = props;
  return (
    <>
      <label
        className="col-sm-2 font-weigth-bold col-form-label"
        htmlFor={name}
      >
        {label} :
      </label>
    </>
  );
};

export default InputLabel;
