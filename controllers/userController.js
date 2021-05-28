const User = require("../models/userModel");
const auth = require("../lib/auth");

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
			data: true,
		});
	} catch (err) {
		res.status(400).send({ message: "Failed Registration", data: false });
	}
};

const login = async (req, res) => {
	const email = req.body.emailAddress;
	const password = req.body.password;

	try {
		const foundUser = await User.findOne({ emailAddress: email }, "password");

		if (!foundUser) {
			res.send({ message: "Username not registered" });
		} else {
			const passwordsMatch = bcrypt.compareSync(password, foundUser.password);

			if (passwordsMatch) {
				res.send({
					message: "Successful login!",
					token: auth.createAccessToken(foundUser._id),
				});
			} else {
				res.send({ message: "Incorrect Password!" });
			}
		}
	} catch (err) {
		res.status(400).send({ message: "Error logging in!" });
	}
};

// pending change in details nothing else changed.

const details = async (req, res) => {
	// const id = req.query.id;

	console.log(req.user);
	const id = req.user.userId;

	try {
		const foundUser = await User.findById(id, "-password");

		res.send(foundUser);
	} catch (err) {
		res.status(400).send("Error getting user details.");
	}
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
