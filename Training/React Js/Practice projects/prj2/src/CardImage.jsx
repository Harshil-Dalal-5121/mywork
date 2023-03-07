import React from "react";

const CardImage = ({ image }) => {
  return (
    <>
      <img src={image} alt="Altimage" className="card-image" />
    </>
  );
};

export default CardImage;
