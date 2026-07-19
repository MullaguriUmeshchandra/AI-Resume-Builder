import { useEffect, useState } from "react";
import axios from "axios";

function MyResumes() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/resume",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResumes(res.data.resumes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">My Resumes</h1>

      {resumes.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500">
            No resumes found. Create your first resume!
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume) => (
            <div
              key={resume._id}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold">
                {resume.fullName}
              </h2>

              <p className="text-gray-600 mt-2">
                {resume.email}
              </p>

              <p className="text-gray-600">
                {resume.phone}
              </p>

              <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                View Resume
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyResumes;