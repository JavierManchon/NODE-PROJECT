const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const videogamesRouter = require("./src/api/routes/videogame.routes");
const consolesRouter = require("./src/api/routes/console.routes")

const {connect} = require("./src/utils/db");
const PORT = process.env.PORT;

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/videogames", videogamesRouter);
app.use("/consoles", consolesRouter)

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`))