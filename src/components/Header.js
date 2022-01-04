import { Link } from "react-router-dom";
import { GiLargeDress } from "react-icons/gi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <div className="title">
          <h1>One Night Dress</h1>
          {/*  */}
        </div>
      </Link>
      <Link to="/dresses">
        <GiLargeDress />
      </Link>
      <Link to="/my-items">
        <AiOutlineFileAdd />
      </Link>
      <Link to="/wishlist/" className="wish">
        <BsHeart />
      </Link>
    </div>
  );
}

export default Header;
