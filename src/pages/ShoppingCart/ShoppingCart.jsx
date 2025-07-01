import styles from "./ShoppingCart.module.css";
import useShoppingCart from "../../context/ShoppingCartProvider";

function ShoppingCart() {
  const { items, removeFromCart } = useShoppingCart();

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.cart}>
      <h2>🛒 עגלת קניות</h2>
      {items.length === 0 ? (
        <p>אין מוצרים בעגלה.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className={styles.item}>
            <img
              src={item.imageUrl}
              alt={item.name}
              className={styles.thumbnail}
            />
            <div className={styles.details}>
              <strong>{item.name}</strong>
              <p>₪{item.price}</p>
            </div>
            <button
              className={styles.removeButton}
              onClick={() => removeFromCart(item)}
            >
              🗑️
            </button>
          </div>
        ))
      )}
      {items.length > 0 && (
        <>
          <h3>סה״כ: ₪{total.toFixed(2)}</h3>
          <button className={styles.checkoutButton}>לתשלום</button>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
