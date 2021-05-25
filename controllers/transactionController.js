const Transaction = require("../models/transactionModel");

const createNewTransaction = (req, res) => {
	const { amount, description, account, category, transactionType } = req.body;

	let newTransaction = new Transaction({
		amount,
		description,
		account: {
			name: account.name,
			accountType: account.accountType,
		},
		category: {
			categoryType: category.categoryType,
			name: category.name,
		},
		transactionType,
	});

	newTransaction.save((err, savedTransaction) => {
		if (err) console.error(err);

		res.json({
			message: "Saved Successfully",
			data: savedTransaction,
		});
	});
};

const details = (req, res) => {
	res.send("transaction details");
};

const update = (req, res) => {
	res.send("update transaction");
};

const deleteTransaction = (req, res) => {
	res.send("delete transaction");
};

module.exports = {
	createNewTransaction,
	details,
	update,
	deleteTransaction,
};
