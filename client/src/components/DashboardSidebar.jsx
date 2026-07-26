import {
  FaHome,
  FaFileAlt,
  FaPlusCircle,
  FaRobot,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

function DashboardSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-slate-800 hover:text-blue-400"
    }`;

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6 shadow-lg">
      <h2 className="text-3xl font-bold text-blue-400 mb-10">
        AI Resume
      </h2>

      <ul className="space-y-3">
        <li>
          <NavLink to="/dashboard" className={linkClass}>
            <FaHome />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/my-resumes" className={linkClass}>
            <FaFileAlt />
            My Resumes
          </NavLink>
        </li>

        <li>
          <NavLink to="/resume-builder" className={linkClass}>
            <FaPlusCircle />
            Create Resume
          </NavLink>
        </li>

        <li>
          <Link
            to="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-blue-400 transition-all duration-200"
          >
            <FaRobot />
            AI Analysis
          </Link>
        </li>

        <li>
          <Link
            to="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-blue-400 transition-all duration-200"
          >
            <FaCog />
            Settings
          </Link>
        </li>

        <li>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-all duration-200"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default DashboardSidebar;