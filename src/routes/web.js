const express = require("express");
const { getAccount, getAbc } = require("../controllers/homeController");
const { loginUser } = require("../controllers/usersController/loginUser");
const router = express.Router();

router.get("/", getAccount);

router.get("/test", getAbc);

router.post("/login", loginUser);

module.exports = router;
