const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

// API routes
const userRoutes = require("./routes/userRoutes");
const assetRoutes = require("./routes/assetRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

// API routes
app.use("/api/users", userRoutes);
app.use("/api/assets", assetRoutes);
app.use("/api/transactions", transactionRoutes);

// ENV VARIABLES
const PORT = process.env.PORT;
const dbUri = process.env.DB_CONN_STRING;

// Mongoose Setup
mongoose.connect(dbUri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error: "));
db.once("open", () => console.log("Db connection established!"));

// Root Route
app.get("/", (req, res) => {
	res.json({ message: "ROOT route for Asset Mgt System" });
});

// Server Listen
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
