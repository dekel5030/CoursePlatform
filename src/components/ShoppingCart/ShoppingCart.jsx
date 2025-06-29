import { useState } from "react";
import styles from "./ShoppingCart.module.css";

function ShoppingCart() {
  const [items, setItems] = useState([]);

  return <h1>Your shopping cart is empty.</h1>;
}
