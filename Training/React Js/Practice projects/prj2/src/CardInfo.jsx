import React from "react";

const CardInfo = ({ title, seriesName, link }) => {
  return (
    <>
      <span className="card-type">{title}</span>
      <h3 className="card-title">{seriesName}</h3>
      <div className="button-container">
        <a href={link} target="__blank">
          <button title="Click to Watch">Watch Now</button>
        </a>
      </div>
    </>
  );
};

export default CardInfo;
