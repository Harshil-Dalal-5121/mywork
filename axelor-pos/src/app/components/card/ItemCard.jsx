import React from "react";
import Card from "react-bootstrap/Card";
import CartButton from "./CartButton";
import CardImage from "./CardImage";

const ItemCard = ({ cardTitle, image, itemPrice }) => {
  return (
    <Card style={{ padding: "16px" }}>
      <CardImage image={image} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{itemPrice}</Card.Text>
        <CartButton />
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
