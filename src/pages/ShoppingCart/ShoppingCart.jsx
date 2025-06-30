import { useState } from "react";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Course A", price: 100, quantity: 1 },
    { id: 2, name: "Course B", price: 150, quantity: 2 },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <strong>{item.name}</strong> - ${item.price} x {item.quantity}
          <div>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button>Checkout</button>
    </div>
  );
}

export default ShoppingCart;
