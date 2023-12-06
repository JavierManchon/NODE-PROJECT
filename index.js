const express = require("express");
const session = require("express-session");
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const { isAuthenticated } = require("./middlewares/auth.middleware");
const dotenv = require("dotenv");
dotenv.config();

const passport = require('passport');
require('./authentication/passport');

const videogamesRouter = require("./src/api/routes/videogame.routes");
const consolesRouter = require("./src/api/routes/console.routes");
const usersRouter = require("./src/api/routes/user.routes")

const {connect} = require("./src/utils/db");
const PORT = process.env.PORT;

const app = express();
connect();

app.use(cors());
app.use(
	session({
	  secret: "JavierManchon_node",
	  resave: false,
	  saveUninitialized: false,
	  cookie: {
		maxAge: 3600000 
	  },
	  store: MongoStore.create({
		mongoUrl: process.env.MONGODB_URL,
	  })
	})
  );
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/videogames", videogamesRouter);
app.use("/consoles", [isAuthenticated], consolesRouter);
app.use("/users", usersRouter);

app.use((err, req, res, next) => {
	return res.status(err.status || 500).json(err.message || "Unexpected error");
});

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`))