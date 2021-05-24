const create = (req, res) => {
	res.send("create transaction");
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
	create,
	details,
	update,
	deleteTransaction,
};
