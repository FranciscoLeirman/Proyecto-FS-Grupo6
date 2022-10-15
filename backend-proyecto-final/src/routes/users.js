const controllers = require("../controllers");
const verifyToken = require("../middlewares/verifyToken");

const express = require('express');
const router = express.Router();

router.get("/user", verifyToken, controllers.getUserById);
router.post("/register", controllers.register);
router.post("/login", controllers.login);

module.exports = router;