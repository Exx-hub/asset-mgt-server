const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const assetSchema = new Schema({
	name: String,
	amount: Number,
	assetType: String, // Cash, Stocks, Bank etc
});

module.exports = mongoose.model("Asset", assetSchema);
