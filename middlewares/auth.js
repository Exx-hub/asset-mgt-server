const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const createAccessToken = (userId) => {
	return jwt.sign({ userId }, secret, { expiresIn: "2h" });
};

module.exports = {
	createAccessToken,
};
