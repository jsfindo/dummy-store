import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './home.jsx'
import Shop from './shop.jsx'
import Cart from './cart.jsx'
import './index.css'

function App() {
  const [cart, setCart] = useState({})

  const totalItems = Object.values(cart).reduce((sum, { count }) => sum + (count || 0), 0)

  function updateCart(id, count, product) {
    setCart(prev => ({ ...prev, [id]: { count, product } }))
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/" className="nav-brand">Verdant</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart" className="cart-link">
            🛒 {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cart={cart} updateCart={updateCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} />} />
      </Routes>

      <footer>
        <span>© 2026 Verdant</span>
        <span>
          <Link to="/contact">Contact</Link> · <Link to="/returns">Returns</Link> · <Link to="/privacy">Privacy</Link>
        </span>
      </footer>
    </BrowserRouter>
  )
}

export default App