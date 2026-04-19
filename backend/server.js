const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const aiRoutes = require("./routes/ai");
const realtimeRoutes = require("./routes/realtime");

app.use("/api/ai", aiRoutes);
app.use("/api/realtime", realtimeRoutes);

app.get("/", (req, res) => {
  res.send("Hirvanta backend running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
