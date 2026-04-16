const express = require("express");
const router = express.Router();

// Resume Builder
router.post("/resume", async (req, res) => {
  res.json({ text: "AI Resume generated" });
});

// Resume from Job Description
router.post("/job-match", async (req, res) => {
  res.json({ text: "Resume tailored to job description" });
});

// Improve Resume
router.post("/resume-improve", async (req, res) => {
  res.json({ text: "Improved resume generated" });
});

// Cover Letter
router.post("/cover-letter", async (req, res) => {
  res.json({ text: "Cover letter generated" });
});

// Recruiter Message
router.post("/recruiter", async (req, res) => {
  res.json({ text: "Recruiter message generated" });
});

// Interview Coach
router.post("/interview", async (req, res) => {
  res.json({ text: "Interview answer generated" });
});

// Career Assistant
router.post("/career", async (req, res) => {
  res.json({ text: "Career advice generated" });
});

module.exports = router;
