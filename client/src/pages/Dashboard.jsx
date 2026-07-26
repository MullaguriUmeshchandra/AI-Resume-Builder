import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardCards from "../components/DashboardCards";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <DashboardNavbar />

        <main className="p-8">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 shadow-lg">
            <h1 className="text-4xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="mt-4 text-lg">
              Manage your resumes, improve ATS scores, and create professional resumes with AI.
            </p>

            <button
              onClick={() => navigate("/resume-builder")}
              className="mt-6 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              ➕ Create Resume
            </button>
          </div>

          {/* Dashboard Statistics */}
          <DashboardCards />

          {/* Recent Activity */}
          <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              Recent Activity
            </h2>

            <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-500 text-lg">
                No resumes created yet.
              </p>

              <button
                onClick={() => navigate("/resume-builder")}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
              >
                Create Your First Resume
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;