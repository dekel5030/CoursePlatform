import { createContext, useContext, useState } from "react";

const shoppingCartContext = createContext();

export default function useShoppingCart() {
  return useContext(shoppingCartContext);
}
