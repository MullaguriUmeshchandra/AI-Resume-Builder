import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">

      {/* Logo */}
      <div className="text-2xl font-bold text-blue-500">
        AI Resume Builder
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
        </li>

        <li>
          <a href="#" className="hover:text-blue-400 transition">
            Features
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-400 transition">
            Templates
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-400 transition">
            Pricing
          </a>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-4 py-2 hover:text-blue-400 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition"
        >
          Register
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;