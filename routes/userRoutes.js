const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", (req, res) => {
	res.send("root route of users");
});

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/details", userController.details);
router.put("/update", userController.updateUser);
router.delete("/delete", userController.deleteUser);

module.exports = router;
