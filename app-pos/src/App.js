import PosNavbar from "./PosNavbar";
import CardList from "./CardList";
import Cart from "./Cart";
import ItemData from "./ItemData";
import { ToastContainer } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (data) => {
    setCartItems((cartItems) => {
      const productInCart = cartItems.find((item) => item.id === data.id);
      if (productInCart) {
        return cartItems.map((item) =>
          item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...cartItems, { ...data, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <PosNavbar />
      <div className="row">
        <div className="col-md-8 py-1 ">
          <CardList data={ItemData} addToCart={addToCart} />
        </div>
        <div className="col-md-4 py-1">
          <Cart cartItems={cartItems} />
        </div>
      </div>
      <div>
        <ToastContainer position="top-end"></ToastContainer>
      </div>
    </>
  );
}

export default App;
