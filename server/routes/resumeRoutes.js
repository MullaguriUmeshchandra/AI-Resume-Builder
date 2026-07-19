const express = require("express");
const router = express.Router();

const {
  createResume,
  getResumes,
} = require("../controllers/resumeController");

const protect = require("../middleware/authMiddleware");

router.post("/", protect, createResume);
router.get("/", protect, getResumes);

module.exports = router;