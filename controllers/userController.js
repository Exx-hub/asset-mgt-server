const User = require("../models/userModel");

const bcrypt = require("bcrypt");
// used to encrpyt data like passwords

const register = async (req, res) => {
	let { firstName, lastName, emailAddress, password } = req.body;

	password = bcrypt.hashSync(password, 10);

	let newUser = new User({
		firstName,
		lastName,
		emailAddress,
		password,
		transactions: [],
		assets: [],
	});

	try {
		const savedUser = await newUser.save();

		res.json({
			message: "Save Successful",
			data: savedUser,
		});
	} catch (err) {
		res.status(400).send("Error saving user!");
	}
};

const login = async (req, res) => {
	const email = req.body.emailAddress;
	const password = req.body.password;

	const foundUser = await User.findOne({ emailAddress: email }, "_id");

	if (!foundUser) {
		res.send({
			userDetails: "Not found",
			message: "Username not registerd",
		});
	} else {
		res.send({
			userDetails: foundUser,
			message: "This is the user",
		});
	}
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
