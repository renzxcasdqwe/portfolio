const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  techStack: [String],
  githubUrl: String,
  liveUrl: String,
  imageUrl: String,
});

module.exports = mongoose.model("Project", projectSchema);
