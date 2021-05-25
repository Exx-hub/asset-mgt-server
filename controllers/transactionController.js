const Transaction = require("../models/transactionModel");

const createNewTransaction = (req, res) => {
	const { amount, description, account, category, transactionType } = req.body;

	let newTransaction = new Transaction({
		amount,
		description,
		account,
		category,
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

const details = async (req, res) => {
	const id = req.query.id;

	try {
		const foundTransaction = await Transaction.findById(id);

		res.send(foundTransaction);
	} catch (err) {
		res.status(400).send("Error getting transaction details.");
	}
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
