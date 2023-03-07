import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardData from "./CardData";

const ItemCard = ({ image, cardTitle, itemPrice }) => {
  return (
    <Row xs={1} md={6} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{cardTitle}</Card.Title>
              <Card.Text>{itemPrice}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ItemCard;
