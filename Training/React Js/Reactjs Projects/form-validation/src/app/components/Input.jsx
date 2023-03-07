import React from "react";

const Input = (props) => {
  const { type, id, name, value, onChange } = props;
  return (
    <>
      <input
        type={type}
        id={id}
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
