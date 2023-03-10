import React, { useMemo } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { Alert } from "react-bootstrap";

const Cart = ({ cartItems }) => {
  let totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (totalPrice, { itemPrice, quantity }) =>
          totalPrice + itemPrice * quantity,
        0
      ),
    [cartItems]
  );

  return (
    <>
      {cartItems.length === 0 ? (
        <Alert key="warning" variant="warning">
          Your Cart is Empty !!
        </Alert>
      ) : (
        <ListGroup as="ol">
          {cartItems.map(({ cardTitle, quantity, itemPrice }, index) => {
            return (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                key={index}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    {index + 1}. {cardTitle}
                  </div>
                  <p>
                    ₹ {itemPrice} x {quantity}
                  </p>
                </div>
                <Badge bg="primary" pill>
                  {itemPrice * quantity}
                </Badge>
              </ListGroup.Item>
            );
          })}
          <ListGroup.Item
            as="div"
            className="d-flex justify-content-between align-items-center list-group-item"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Net Total</div>
            </div>
            <span variant="primary" className="badge rounded-pill bg-primary">
              {totalPrice}
            </span>
          </ListGroup.Item>
        </ListGroup>
      )}
    </>
  );
};

export default Cart;
