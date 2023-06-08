const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

const app = express();
const hostname = process.env.RENDER_EXTERNAL_HOST || 'localhost';
const port = process.env.PORT || 3000;

dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(
	cors({
		origin: '*'
	})
);


mongoose.connect("mongodb+srv://abhisheksaini1219:Abhishek9212@cluster0.jmmkjfo.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (e) => {
	console.log(e ? e : "Connected successfully to database");
});

app.use("/auth", require("./routers/authRouter"));
app.use("/user", require("./routers/userRouter"));
app.use("/bank", require("./routers/bankRouter"));
app.use("/camps", require("./routers/campRouter"));

app.listen(port, () =>
	console.log(`Server running at http://${hostname}:${port}`)
);