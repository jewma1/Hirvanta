const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generate(prompt) {
  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "system", content: "You are a professional career assistant." },
      { role: "user", content: prompt },
    ],
  });

  return response.choices[0].message.content;
}

router.post("/resume", async (req, res) => {
  const text = await generate("Create professional resume");
  res.json({ text });
});

router.post("/job-match", async (req, res) => {
  const text = await generate("Create resume based on job description");
  res.json({ text });
});

router.post("/resume-improve", async (req, res) => {
  const text = await generate("Improve this resume");
  res.json({ text });
});

router.post("/cover-letter", async (req, res) => {
  const text = await generate("Write professional cover letter");
  res.json({ text });
});

router.post("/recruiter", async (req, res) => {
  const text = await generate("Write recruiter outreach message");
  res.json({ text });
});

router.post("/interview", async (req, res) => {
  const text = await generate("Generate interview answer");
  res.json({ text });
});

router.post("/career", async (req, res) => {
  const text = await generate("Give career advice");
  res.json({ text });
});

router.post("/tracker", async (req, res) => {
  const text = await generate("Track job applications and suggest followups");
  res.json({ text });
});

module.exports = router;
