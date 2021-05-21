const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONN_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error: "));
db.once("open", () => console.log("Db connection established!"));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
	res.json({ message: "ROOT route for Asset Mgt System" });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
