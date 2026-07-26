import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";
import downloadPDF from "../utils/downloadPDF";

import PersonalInfo from "../components/resume/PersonalInfo";
import Education from "../components/resume/Education";
import Experience from "../components/resume/Experience";
import Projects from "../components/resume/Projects";
import Skills from "../components/resume/Skills";
import Certifications from "../components/resume/Certifications";
import Achievements from "../components/resume/Achievements";
import Languages from "../components/resume/Languages";

import ATSResume from "../components/templates/ATSResume";
import ModernResume from "../components/templates/ModernResume";
import CreativeResume from "../components/templates/CreativeResume";

function ResumeBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState("ats");
  const resumeRef = useRef(null);
  const { id } = useParams();

  const [resume, setResume] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    portfolio: "",
    objective: "",
    skills: "",

    education: [
      {
        college: "",
        degree: "",
        field: "",
        startYear: "",
        endYear: "",
        cgpa: "",
      },
    ],

    experience: [
      {
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],

    projects: [
      {
        title: "",
        description: "",
        technologies: "",
        github: "",
        live: "",
      },
    ],

    certifications: [
      {
        title: "",
        organization: "",
        year: "",
      },
    ],

    achievements: [
      {
        title: "",
        description: "",
      },
    ],

    languages: [
      {
        language: "",
        proficiency: "",
      },
    ],
  });

  // Load Resume for Edit
  useEffect(() => {
    if (id) {
      fetchResume();
    }
  }, [id]);

  const fetchResume = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get(`/resume/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResume(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load resume");
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

  // Save / Update Resume
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      let res;

      if (id) {
        res = await API.put(`/resume/${id}`, resume, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        alert("✅ Resume Updated Successfully!");
      } else {
        res = await API.post("/resume", resume, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        alert("✅ Resume Saved Successfully!");
      }

      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "❌ Failed to Save Resume");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid lg:grid-cols-2 gap-8">

        {/* Left Side */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <PersonalInfo
            resume={resume}
            handleChange={handleChange}
          />

          {/* Career Objective */}
          <div className="bg-white rounded-xl shadow-md p-6">
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

          <Education
            resume={resume}
            setResume={setResume}
          />

          <Experience
            resume={resume}
            setResume={setResume}
          />

          <Projects
            resume={resume}
            setResume={setResume}
          />

          <Skills
            resume={resume}
            handleChange={handleChange}
          />

          <Certifications
            resume={resume}
            setResume={setResume}
          />

          <Achievements
            resume={resume}
            setResume={setResume}
          />

          <Languages
            resume={resume}
            setResume={setResume}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            {id ? "Update Resume" : "Save Resume"}
          </button>

        </form>

        {/* Right Side */}
        <div>

          {/* Template Selection */}
          <div className="flex gap-2 mb-4">

            <button
              type="button"
              onClick={() => setSelectedTemplate("ats")}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              ATS
            </button>

            <button
              type="button"
              onClick={() => setSelectedTemplate("modern")}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Modern
            </button>

            <button
              type="button"
              onClick={() => setSelectedTemplate("creative")}
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Creative
            </button>

          </div>

          {/* Download PDF */}
          <button
            type="button"
            onClick={() => downloadPDF(resumeRef.current)}
            className="bg-red-600 text-white px-4 py-2 rounded mb-4 hover:bg-red-700"
          >
            Download PDF
          </button>

          {/* Resume Preview */}
          <div ref={resumeRef}>

            {selectedTemplate === "ats" && (
              <ATSResume resume={resume} />
            )}

            {selectedTemplate === "modern" && (
              <ModernResume resume={resume} />
            )}

            {selectedTemplate === "creative" && (
              <CreativeResume resume={resume} />
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default ResumeBuilder;