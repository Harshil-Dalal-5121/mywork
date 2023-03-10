import React from "react";
import ItemCard from "./ItemCard";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const CardList = ({ data, addToCart }) => {
  return (
    <>
      <Row xs={2} md={4} lg={6}>
        {data.map((card) => (
          <Col>
            <ItemCard
              key={card.id}
              image={card.image}
              cardTitle={card.cardTitle}
              itemPrice={card.itemPrice}
              item={card}
              addToCart={addToCart}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CardList;
