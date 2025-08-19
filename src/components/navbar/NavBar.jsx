import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between px-7 py-10 bg-zinc-100">
        <Link to="/">
          <h1 className="font-semibold md:text-4xl text-3xl text-sky-600">
            RTK shoping cart
          </h1>
        </Link>
        <div>
          <ul className="flex gap-7 font-semibold text-xl text-zinc-700 px-9">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/cart"> Cart </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
