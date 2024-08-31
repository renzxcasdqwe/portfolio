const express = require("express");
const mongoose = require("mongoose");
const project = require("./routes/project");

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/portfolio");

mongoose.connection.once("open", () => console.log("Connected to MongoDB"));

app.use(express.json());

// Use routes
app.use("/api/projects", project);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
