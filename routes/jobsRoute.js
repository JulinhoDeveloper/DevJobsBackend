const express = require("express");
const router = express.Router();
const Jobs = require('../controllers/jobs');

router.get("/getalljobs", Jobs.getAllJobs);

module.exports = router;