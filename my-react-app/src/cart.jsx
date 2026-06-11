export default function Cart({ cart, updateCart }) {
  const entries = Object.entries(cart).filter(([, { count }]) => count > 0)

  if (entries.length === 0) {
    return <div className="cart"><p className="cart-empty">Your cart is empty — <a href="/shop">go shopping</a></p></div>
  }

  const totalPrice = entries.reduce((sum, [, { count, product }]) => sum + count * product.price, 0)

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {entries.map(([id, { count, product }]) => (
        <div key={id} className="cart-item">
          <img className="cart-item-image" src={product.imageUrl} alt={product.title} />

          <div className="cart-item-info">
            <p className="cart-item-title">{product.title}</p>
            <p className="cart-item-price">${product.price}</p>
            <div className="counter">
              <button onClick={() => updateCart(id, Math.max(0, count - 1), product)}>−</button>
              <span>{count}</span>
              <button onClick={() => updateCart(id, count + 1, product)}>+</button>
            </div>
          </div>

          <div className="cart-item-right">
            <p className="cart-item-subtotal">${(count * product.price).toFixed(2)}</p>
            <button className="remove-btn" onClick={() => updateCart(id, 0, product)}>Remove</button>
          </div>
        </div>
      ))}

      <div className="cart-total">
        <span className="cart-total-label">Total</span>
        <span className="cart-total-amount">${totalPrice.toFixed(2)}</span>
      </div>

      <button className="checkout-btn" onClick={() => alert('Order placed!')}>
        Proceed to Checkout
      </button>
    </div>
  )
}