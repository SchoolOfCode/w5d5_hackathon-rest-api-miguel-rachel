import express from "express";
const app = express();
const PORT = process.env.port || 3000;
import animalsRouter from "./routes/animalsRouter.js";

// test route
app.get("/", function (req, res) {
	res.json({
		success: true,
		message: "Test route up and running!",
	});
});

app.use(express.json());
app.use("/animals", animalsRouter);

app.listen(PORT, function () {
	console.log(`Server is running on port ${PORT}`);
});
