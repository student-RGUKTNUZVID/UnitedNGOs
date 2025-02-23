//import ngoLogo from '@/assets/images/ngo_logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
 // const navigate = useNavigate();
  //const location = useLocation();

  const NavMenuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Initiatives", link: "initiatives" },
    { name: "Partners", link: "/partners" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="w-full bg-gradient-to-b from-green-300 to-blue-200 text-black-300 fixed top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-5">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <img src="" alt="NGO Logo" className="h-10" />
          <span className="text-xl font-bold">NGO Connect</span>
        </div>
        <div className="hidden md:flex space-x-6">
          {NavMenuItems.map((navitem) => (
            <button
              key={navitem.name}
              onClick={() => navigate(navitem.link)}
              className={`hover:text-green-300 transition ${location.pathname === navitem.link ? "font-bold" : ""}`}
            >
              {navitem.name}
            </button>
          ))}
        </div>
        <button onClick={() => navigate("/login")} className="bg-white text-green-600 px-4 py-2 rounded hover:bg-red-200 transition">
          Register / Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
