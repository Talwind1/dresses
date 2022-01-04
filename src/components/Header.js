import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <h1 className="title">Borrow a Dress</h1>
      {/* <div className="logo"></div> */}
      <Link to="/">Home</Link>
      <Link to="/dresses">Dresses</Link>
      <Link to="/my-items">My Items</Link>
      <Link to="/wishlist/" className="wish">
        Wishlist
      </Link>
    </div>
  );
}

export default Header;
