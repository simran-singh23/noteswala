import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = "rounded px-4 py-2 transition ]hover:bg-gray-700";
  const activeClass = "bg-gray-900 text-white";

  return (
    <nav className="bg-gray-800 px-6 py-4 text-white">

      <div className="flex items-center 
      justify-between">
        <h1 className="text-xl font-bold">Book store </h1>


        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
                

              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
