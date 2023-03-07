import React from "react";

const HelperText = ({ helperText, error, success }) => {
  return (
    <>
      <span
        className="font-weigth-bold"
        style={{ color: error ? "red" : success ? "green" : "black" }}
      >
        {helperText}
      </span>
    </>
  );
};
export default HelperText;
