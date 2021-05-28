const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const { verifyToken } = require("../middlewares/verifyToken");

router.get("/", (req, res) => {
	res.send("root route of users");
});

// use verifyToken middleware before endpoint function. it will not continue to
// endpoint if no token or invalid token. this makes it a private route only accessible
// to users with a valid token.

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/details", verifyToken, userController.details);
router.put("/update", userController.updateUser);
router.delete("/delete", userController.deleteUser);

module.exports = router;
