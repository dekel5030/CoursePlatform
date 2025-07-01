import { createContext, useContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext();

export default function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("shopping-cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    setItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem.id !== item.id)
    );
  };

  return (
    <ShoppingCartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
