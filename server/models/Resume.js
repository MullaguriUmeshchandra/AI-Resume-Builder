const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    college: String,
    degree: String,
    field: String,
    startYear: String,
    endYear: String,
    cgpa: String,
  },
  { _id: false }
);

const experienceSchema = new mongoose.Schema(
  {
    company: String,
    role: String,
    startDate: String,
    endDate: String,
    description: String,
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    technologies: String,
    github: String,
    live: String,
  },
  { _id: false }
);

const certificationSchema = new mongoose.Schema(
  {
    title: String,
    organization: String,
    year: String,
  },
  { _id: false }
);

const achievementSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  { _id: false }
);

const languageSchema = new mongoose.Schema(
  {
    language: String,
    proficiency: String, // Changed from level to match frontend
  },
  { _id: false }
);

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    fullName: String,
    email: String,
    phone: String,
    address: String,

    objective: String,

    skills: String,

    profileImage: String,

    linkedin: String,
    github: String,
    portfolio: String,

    education: [educationSchema],
    experience: [experienceSchema],
    projects: [projectSchema],
    certifications: [certificationSchema],
    achievements: [achievementSchema],
    languages: [languageSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resume", resumeSchema);