import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>
          Contact
        </NavLink>
      </nav>

      {/* Page Content */}
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
