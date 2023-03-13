import React, { useEffect, useState } from "react";
import PosNavbar from "./PosNavbar";
import CardList from "./CardList";
import Cart from "./Cart";
import ItemData from "./ItemData";
import ToastMessage from "./ToastMessage";
import { ToastContainer } from "react-bootstrap";

const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("LocalStorageCart") || "[]"
);
function App() {
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);
  const [toasts, setToasts] = useState([]);

  const addToCart = (itemData) => {
    setCartItems((cartItems) => {
      const productInCart = cartItems.find((item) => item.id === itemData.id);
      if (productInCart) {
        return cartItems.map((item) => {
          if (item.id === itemData.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            setToasts((t) => [...t, ` ${itemData.cardTitle} has been added`]);
            return item;
          }
        });
      } else {
        setToasts((t) => [...t, ` ${cartItems.cardTitle} has been added`]);
        return [...cartItems, { ...itemData, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    return setCartItems([]);
  };

  const remove = (index) => {
    setToasts((t) => {
      const _t = [...t];
      _t.splice(index, 1);
      return _t;
    });
  };

  useEffect(() => {
    localStorage.setItem("LocalStorageCart", JSON.stringify(cartItems));
  }, [cartItems]);
  console.log(toasts);

  return (
    <>
      <PosNavbar />
      <div className="row">
        <div className="col-md-8 py-2">
          <CardList data={ItemData} addToCart={addToCart} />
        </div>
        <div className="col-md-4 py-2">
          <Cart cartItems={cartItems} onClick={clearCart} />
        </div>
      </div>
      <div>
        <ToastContainer position="top-end" className="p-3">
          {toasts.map((t, i) => {
            return (
              <ToastMessage onClose={remove} index={i} key={i}>
                {t}
              </ToastMessage>
            );
          })}
        </ToastContainer>
      </div>
    </>
  );
}

export default App;
