import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/dresses">Dresses</Link>
      <Link to="/my-items">My Items</Link>
      <Link to="/wishlist/">Wishlist</Link>
    </div>
  );
}

export default Header;
