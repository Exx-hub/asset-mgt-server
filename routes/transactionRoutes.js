const express = require("express");
const router = express.Router();

const tranasactionController = require("../controllers/transactionController");

router.post("/", (req, res) => {
	res.send("root route of transactions");
});

router.post("/create", tranasactionController.createNewTransaction);
router.get("/details", tranasactionController.details);
router.put("/update", tranasactionController.update);
router.delete("/delete", tranasactionController.deleteTransaction);

module.exports = router;
