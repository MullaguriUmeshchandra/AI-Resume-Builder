const mongoose = require("mongoose");

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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resume", resumeSchema);