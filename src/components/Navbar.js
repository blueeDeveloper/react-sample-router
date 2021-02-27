import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <div className="flex">
        <div className="flexChild">
          <Link to="/">Home</Link>
        </div>
        <div className="flexChild">
          <Link to="/cart">Cart</Link>
        </div>
        <div className="flexChild">
          <Link to="/checkout">Checkout</Link>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
