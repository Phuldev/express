const express = require("express");
const router = express.Router();
const { createInfo } = require("../controllers/userController");

router.get('/user-info', createInfo)
router.get('/', createInfo)

module.exports = router;
