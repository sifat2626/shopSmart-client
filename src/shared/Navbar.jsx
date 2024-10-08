import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navbar() {
  const { user, logOut } = useAuth();
  console.log(user);

  const handleLogout = () => {
    logOut();
  };

  const navList = (
    <>
      <li>
        <Link to="/" className="text-lg font-medium">
          Home
        </Link>
      </li>
      {!user ? (
        <>
          <li>
            <Link to="/login" className="text-lg font-medium">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-lg font-medium">
              Register
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/products/create" className="text-lg font-medium">
              Create Product
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-lg font-medium">
              All Products
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navList}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold">ShopSmart</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyUi.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
