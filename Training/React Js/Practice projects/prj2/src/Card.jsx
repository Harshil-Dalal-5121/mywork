import React from "react";
import "./index.css";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";

const Card = (props) => {
  const { image, seriesName, title, link } = props;
  return (
    <>
      <div className="card">
        <CardImage image={image} />
        <div className="card-info">
          <CardInfo seriesName={seriesName} title={title} link={link} />
        </div>
      </div>
    </>
  );
};

export default Card;
