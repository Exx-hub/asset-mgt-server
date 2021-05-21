const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstName: String,
	lastName: String,
	emailAddress: String,
	password: String,
	transactions: [
		{
			type: Schema.Types.ObjectId,
			ref: "Transaction",
		},
	],
	assets: [
		{
			type: Schema.Types.ObjectId,
			ref: "Asset",
		},
	],
});

module.exports = mongoose.model("User", userSchema);
