const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
	amount: Number,
	description: String,
	date: { type: Date, default: new Date() },
	account: {
		name: String,
		accountType: String,
	},
	category: {
		categoryType: String, // income || expense
		name: String,
	},
	transactionType: { type: String }, // income , expense or transfer
});

module.exports = mongoose.model("Transaction", transactionSchema);
