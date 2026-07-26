const Resume = require("../models/Resume");

// Create Resume
exports.createResume = async (req, res) => {
  try {
    const resume = await Resume.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(resume);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Get All Resumes
exports.getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({
      user: req.user.id,
    });

    res.status(200).json(resumes);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Get Single Resume
exports.getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    res.status(200).json(resume);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Update Resume
exports.updateResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    res.status(200).json(resume);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Delete Resume
exports.deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    res.status(200).json({
      message: "Resume Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};