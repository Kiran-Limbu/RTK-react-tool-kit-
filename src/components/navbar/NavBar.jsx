import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <nav className="flex justify-between px-7 py-10 bg-zinc-100">
        <Link to="/">
          <h1 className="font-semibold md:text-3xl text-2xl text-sky-600 tracking-tighter">
            RTK shoping cart
          </h1>
        </Link>
        <div>
          <ul className="flex gap-7 font-semibold text-xl text-zinc-700 px-9 relative">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/cart"> Cart </Link>
              <span className="font-bold text-2xl text-green-600 absolute -top-[5vh]  flex justify-center items-center">
                {cart.length}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
