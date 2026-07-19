import { Link } from "react-router-dom";
import { useState } from "react";
import API from "../api/axios";
import axios from "axios";
function Register() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

try {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      "http://localhost:5000/api/resume",
      resume,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("✅ Resume Saved Successfully!");

    console.log(res.data);
  } catch (error) {
    console.error(error);
    alert("❌ Failed to Save Resume");
  }
};

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">

      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account 🚀
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Join AI Resume Builder and create your professional resume.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input type="text" name="name" value={formData.name}onChange={handleChange} placeholder="Enter your full name"
  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"
  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create a password"
  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
>
  {loading ? "Registering..." : "Register"}
</button>

        </form>

        <p className="text-center mt-6">
          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 font-semibold ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;