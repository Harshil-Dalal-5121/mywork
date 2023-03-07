import React from "react";
import Card from "./Card";


function CardList({ data }) {
  return(
  <> <div className="cards">
     {data.map(({id,image,seriesName,title,link}) =>

    <Card
      key={id}
      image={image}
      seriesName={seriesName}
      title={title}
      link={link}
    />
     )
  } 
     </div>
     </>
  );
}

export default CardList;
