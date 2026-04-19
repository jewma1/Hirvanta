const express = require("express");
const OpenAI = require("openai");

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

function ensureOpenAIKey() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is missing in environment variables");
  }
}

async function generateCareerResponse(systemPrompt, userPrompt) {
  ensureOpenAIKey();

  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    temperature: 0.7,
    messages: [
      {
        role: "system",
        content: systemPrompt
      },
      {
        role: "user",
        content: userPrompt
      }
    ]
  });

  return response.choices?.[0]?.message?.content || "No response generated.";
}

function textFromBody(req) {
  return (
    req.body?.prompt ||
    req.body?.text ||
    req.body?.jobDescription ||
    req.body?.resume ||
    req.body?.content ||
    ""
  );
}

router.post("/resume", async (req, res) => {
  try {
    const input = textFromBody(req);

    const text = await generateCareerResponse(
      "You are a professional resume writer. Create clear, ATS-friendly, polished resumes.",
      input
        ? `Create a professional resume using this information:\n\n${input}`
        : "Create a professional resume for a job seeker."
    );

    res.status(200).json({ success: true, text });
  } catch (error) {
    console.error("/api/ai/resume error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/job-match", async (req, res) => {
  try {
    const input = textFromBody(req);

    const text = await generateCareerResponse(
      "You are a job matching assistant. Analyze resumes and job descriptions and explain fit clearly.",
      input
        ? `Match the candidate to this job description and explain the fit:\n\n${input}`
        : "Analyze a candidate profile against a job description and explain the fit."
    );

    res.status(200).json({ success: true, text });
  } catch (error) {
    console.error("/api/ai/job-match error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/resume-improve", async (req, res) => {
  try {
    const input = textFromBody(req);

    const text = await generateCareerResponse(
      "You are an expert resume reviewer. Improve resumes for clarity, impact, and ATS compatibility.",
      input
        ? `Improve this resume and make it stronger:\n\n${input}`
        : "Improve a resume and make it more professional."
    );

    res.status(200).json({ success: true, text });
  } catch (error) {
    console.error("/api/ai/resume-improve error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/cover-letter", async (req, res) => {
  try {
    const input = textFromBody(req);

    const text = await generateCareerResponse(
      "You are a professional cover letter writer. Write concise, tailored, strong cover letters.",
      input
        ? `Write a professional cover letter using this information:\n\n${input}`
        : "Write a professional cover letter for a job application."
    );

    res.status(200).json({ success: true, text });
  } catch (error) {
    console.error("/api/ai/cover-letter error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/recruiter", async (req, res) => {
  try {
    const input = textFromBody(req);

    const text = await generateCareerResponse(
      "You are a professional career communication assistant. Write polite, confident recruiter messages.",
      input
        ? `Write a recruiter message using this information:\n\n${input}`
        : "Write a professional recruiter outreach message."
    );

    res.status(200).json({ success: true, text });
  } catch (error) {
    console.error("/api/ai/recruiter error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/interview", async (req, res) => {
  try {
    const input = textFromBody(req);

    const text = await generateCareerResponse(
      "You are an interview coach. Provide strong, realistic, professional interview answers and advice.",
      input
        ? `Help answer this interview question or prepare for this interview:\n\n${input}`
        : "Generate a strong professional interview answer."
    );

    res.status(200).json({ success: true, text });
  } catch (error) {
    console.error("/api/ai/interview error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/career", async (req, res) => {
  try {
    const input = textFromBody(req);

    const text = await generateCareerResponse(
      "You are a senior career advisor. Give practical, honest, professional career advice.",
      input
        ? `Give career advice based on this situation:\n\n${input}`
        : "Give practical career advice to a job seeker."
    );

    res.status(200).json({ success: true, text });
  } catch (error) {
    console.error("/api/ai/career error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/tracker", async (req, res) => {
  try {
    const input = textFromBody(req);

    const text = await generateCareerResponse(
      "You are a job application tracking assistant. Help organize job applications and follow-up actions.",
      input
        ? `Track these applications and suggest follow-ups:\n\n${input}`
        : "Suggest how to track job applications and follow up effectively."
    );

    res.status(200).json({ success: true, text });
  } catch (error) {
    console.error("/api/ai/tracker error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
