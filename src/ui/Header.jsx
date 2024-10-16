import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex bg-yellow-400 p-5 justify-between items-center">
      <span className="uppercase tracking-widest font-semibold">
        Fast Food App
      </span>

      <Link to="/cart">
        <span className="uppercase tracking-widest font-semibold text-sm">
          Your Cart
        </span>
      </Link>
    </header>
  );
}

export default Header;
