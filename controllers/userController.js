const register = (req, res) => {
	res.json({ message: "register" });
};

const login = (req, res) => {
	res.json({ message: "login" });
};

const details = (req, res) => {
	res.json({ message: "details" });
};

const updateUser = (req, res) => {
	res.json({ message: "update" });
};

const deleteUser = (req, res) => {
	res.json({ message: "delete" });
};

module.exports = {
	register,
	login,
	details,
	updateUser,
	deleteUser,
};
