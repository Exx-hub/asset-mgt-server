const create = (req, res) => {
	res.send("create asset");
};

const details = (req, res) => {
	res.send("asset details");
};

const update = (req, res) => {
	res.send("update asset");
};

const deleteAsset = (req, res) => {
	res.send("delete asset");
};

module.exports = {
	create,
	details,
	update,
	deleteAsset,
};
