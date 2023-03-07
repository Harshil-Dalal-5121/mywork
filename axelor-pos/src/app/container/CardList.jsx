import React from "react";
import ItemCard from "../components/card/ItemCard";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const CardList = ({ data }) => {
  return (
    <>
      <Row lg={6}>
        {data.map(({ id, image, cardTitle, itemPrice }) => (
          <Col>
            <ItemCard
              key={id}
              image={image}
              cardTitle={cardTitle}
              itemPrice={itemPrice}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CardList;
