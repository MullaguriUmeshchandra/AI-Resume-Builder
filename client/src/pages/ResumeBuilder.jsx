import { useState } from "react";
import PersonalInfo from "../components/resume/PersonalInfo";
import Skills from "../components/resume/Skills";
import ResumePreview from "../components/resume/ResumePreview";
import axios from "axios";
function ResumeBuilder() {
  const [resume, setResume] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    objective: "",
    skills: "",
  });

  const handleChange = (e) => {
    setResume({
      ...resume,
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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid lg:grid-cols-2 gap-8">

        {/* Left Side - Form */}
        <form onSubmit={handleSubmit}>
          <PersonalInfo
            resume={resume}
            handleChange={handleChange}
          />

          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Career Objective
            </h2>

            <textarea
              name="objective"
              rows="5"
              placeholder="Write your career objective..."
              value={resume.objective}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <Skills
            resume={resume}
            handleChange={handleChange}
          />

         <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
  >
    Save Resume
  </button>
        </form>

        {/* Right Side - Live Preview */}
        <ResumePreview resume={resume} />

      </div>
    </div>
  );
}

export default ResumeBuilder;