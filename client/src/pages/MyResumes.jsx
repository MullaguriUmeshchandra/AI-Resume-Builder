import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function MyResumes() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/resume", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResumes(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch resumes");
    } finally {
      setLoading(false);
    }
  };

  const deleteResume = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await API.delete(`/resume/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("✅ Resume Deleted Successfully!");

      fetchResumes();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to delete resume");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-xl font-semibold">Loading resumes...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">My Resumes</h1>

      {resumes.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">
            No resumes found. Create your first resume!
          </p>
        </div>
      ) : (
        resumes.map((resume) => (
          <div
            key={resume._id}
            className="bg-white shadow-lg rounded-xl p-5 mb-4"
          >
            <h2 className="text-xl font-bold">
              {resume.fullName || "Untitled Resume"}
            </h2>

            <p className="text-gray-600">{resume.email}</p>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => navigate(`/resume/edit/${resume._id}`)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteResume(resume._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MyResumes;