const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const Campaign = require("./campaignmodel");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

// POST Route
app.post("/campaigns", async (req, res) => {
  try {
    const newCampaign = new Campaign({
      ...req.body,
      impression: Math.floor(Math.random() * 10000),
      clicks: Math.floor(Math.random() * 100),
      conversions: Math.floor(Math.random() * 10000),
    });
    await newCampaign.save();
    res.send(newCampaign);
  } catch (err) {
    res.status(500).send({ error: "Failed to save campaign" });
  }
});

// GET Route
app.get("/campaigns", async (req, res) => {
  try {
    const response = await Campaign.find();
    res.send(response);
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch campaigns" });
  }
});

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// PORT for both local and production
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
