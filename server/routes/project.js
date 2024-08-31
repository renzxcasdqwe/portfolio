const express = require("express");
const router = express.Router();
const project = require("../controllers/project");

router.get("/", project.getAllProjects);
router.post("/", project.createProject);

module.exports = router;
