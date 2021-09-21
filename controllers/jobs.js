const Job = require("../models/jobModel")


exports.getAllJobs = async(req, res) => {
  
    try {
        const jobs = await Job.find()
        res.send(jobs)
    } catch (error) {
        return res.status(400).json({ error });
    }

};