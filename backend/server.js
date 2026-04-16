const express = require("express");
const router = express.Router();

router.post("/resume", async (req, res) => {
  const { prompt } = req.body;

  res.json({
    text: "AI Resume Generated: " + prompt
  });
});

router.post("/cover-letter", async (req, res) => {
  const { prompt } = req.body;

  res.json({
    text: "AI Cover Letter: " + prompt
  });
});

router.post("/recruiter", async (req, res) => {
  const { prompt } = req.body;

  res.json({
    text: "Recruiter Message: " + prompt
  });
});

module.exports = router;

const aiRoutes = require("./routes/ai");
app.use("/api/ai", aiRoutes);
