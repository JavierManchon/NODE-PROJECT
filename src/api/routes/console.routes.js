const express = require("express");
const {getConsoles, getConsolesById, getConsolesByName, postConsoles, deleteConsoles, putConsoles, addVideogames} = require("../controllers/console.controller");
const consolesRouter = express.Router();

consolesRouter.get("/",getConsoles)
consolesRouter.get("/:id",getConsolesById)
consolesRouter.get("/name/:name",getConsolesByName)
consolesRouter.post("/",postConsoles)
consolesRouter.delete("/:id",deleteConsoles)
consolesRouter.put("/",putConsoles)
consolesRouter.put("/add-videogames", addVideogames)



module.exports = consolesRouter;