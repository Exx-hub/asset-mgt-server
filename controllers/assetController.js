const Asset = require("../models/assetModel");

const createNewAsset = (req, res) => {
	let { name, amount, assetType } = req.body;

	let newAsset = new Asset({
		name,
		amount,
		assetType,
	});

	newAsset.save((err, savedAsset) => {
		if (err) console.error(err);

		res.json({
			message: "Asset Saved",
			data: savedAsset,
		});
	});
};

const details = async (req, res) => {
	const id = req.query.id;

	try {
		const foundAsset = await Asset.findById(id);

		res.send(foundAsset);
	} catch (err) {
		res.status(400).send("Error getting asset details.");
	}
};

const update = (req, res) => {
	res.send("update asset");
};

const deleteAsset = (req, res) => {
	res.send("delete asset");
};

module.exports = {
	createNewAsset,
	details,
	update,
	deleteAsset,
};
