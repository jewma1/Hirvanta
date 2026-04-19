const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();

router.post("/session", async (req, res) => {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "OPENAI_API_KEY missing"
      });
    }

    const response = await fetch("https://api.openai.com/v1/realtime/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-realtime-preview",
        voice: "alloy"
      })
    });

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    console.error("Realtime session error:", error.message);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
