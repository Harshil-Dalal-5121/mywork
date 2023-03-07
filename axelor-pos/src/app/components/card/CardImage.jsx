import React from "react";

const CardImage = ({ image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "150px",
      }}
    ></div>
  );
};

export default CardImage;
