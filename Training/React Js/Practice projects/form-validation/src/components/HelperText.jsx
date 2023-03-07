import React from "react";

const HelperText = ({ helperText, error }) => {
  return (
    <>
      <span
        className="font-weigth-bold"
        style={{ color: error ? "red" : "black" }}
      >
        {helperText}
        {error}
      </span>
    </>
  );
};
export default HelperText;
