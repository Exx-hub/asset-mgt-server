const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
	console.log(req.headers.authorization);
	const token = req.headers.authorization;
	console.log(token);

	if (!token) res.send("access denied");

	try {
		const verified = jwt.verify(token.slice(7), process.env.JWT_SECRET);

		req.user = verified;
		next();
	} catch (err) {
		res.send("invalid token");
	}
}

module.exports = {
	verifyToken,
};
