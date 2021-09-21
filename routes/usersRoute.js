const express = require("express");
const router = express.Router();
const User = require('../controllers/user');

router.post("/register", User.registro);

router.post("/login", User.login);

module.exports = router;