const express = require("express");
const router = express.Router();

const assetController = require("../controllers/assetControler");

router.get("/", (req, res) => {
	res.send("root route of assets");
});

router.post("/create", assetController.createNewAsset);
router.get("/details", assetController.details);
router.put("/update", assetController.update);
router.delete("/delete", assetController.deleteAsset);

module.exports = router;
