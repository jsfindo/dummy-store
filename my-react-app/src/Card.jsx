export default function Card({ title, imageUrl, price, id, count, updateCart }) {
  return (
    <div className="Product">
      <img className="product-image" src={imageUrl} alt={title} />
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-price">${price}</p>
        <div className="counter">
          <button onClick={() => updateCart(id, Math.max(0, count - 1), { title, imageUrl, price })}>−</button>
          <span>{count}</span>
          <button onClick={() => updateCart(id, count + 1, { title, imageUrl, price })}>+</button>
        </div>
      </div>
    </div>
  )
}