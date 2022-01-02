import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <h1>Borrow a Dress</h1>
      <Link to="/">Home</Link>
      <Link to="/dresses">Dresses</Link>
      <Link to="/my-items">My Items</Link>
      <Link to="/wishlist/">Wishlist</Link>
    </div>
  );
}

export default Header;
