const express = require("express");
const {getConsoles, getConsolesById, getConsolesByName, postConsoles, deleteConsoles, putConsoles, addVideogames} = require("../controllers/console.controller");
const fileMiddlewares = require("../../../middlewares/file.middleware");
const consolesRouter = express.Router();

consolesRouter.get("/",getConsoles)
consolesRouter.get("/:id",getConsolesById)
consolesRouter.get("/name/:name",getConsolesByName)
consolesRouter.post("/", [fileMiddlewares.upload.single('picture'), fileMiddlewares.uploadToCloudinary],postConsoles)
consolesRouter.delete("/:id",deleteConsoles)
consolesRouter.put("/",putConsoles)
consolesRouter.put("/add-videogames", addVideogames)



module.exports = consolesRouter;