const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
	res.json({ message: "ROOT route for Asset Mgt System" });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
