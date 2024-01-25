const express = require("express");
const router = express.Router();
const { createInfo, getInfo } = require("../controllers/userController");

router.post("/user-info", createInfo);
router.get("/user-info", getInfo);

module.exports = router;
