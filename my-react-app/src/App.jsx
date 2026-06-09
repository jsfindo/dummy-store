import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './home.jsx';
import Shop from './shop.jsx';
import Cart from './cart.jsx';

function App() {
  return (


 <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/shop">Shop</Link> |{" "}
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;  // ← was App() — calling it here breaks React