import React, { useEffect, useState } from "react";
import PosNavbar from "./PosNavbar";
import CardList from "./CardList";
import Cart from "./Cart";
import ItemData from "./ItemData";

const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("LocalStorageCart") || "[]"
);
function App() {
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);

  const addToCart = (itemData) => {
    setCartItems((cartItems) => {
      const productInCart = cartItems.find((item) => item.id === itemData.id);
      if (productInCart) {
        return cartItems.map((item) => {
          if (item.id === itemData.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...cartItems, { ...itemData, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    return setCartItems([]);
  };

  useEffect(() => {
    localStorage.setItem("LocalStorageCart", JSON.stringify(cartItems));
  }, [cartItems]);

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
      <div></div>
    </>
  );
}

export default App;
