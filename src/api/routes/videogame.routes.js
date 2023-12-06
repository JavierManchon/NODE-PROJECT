const express = require("express");
const {getVideogames,getVideogamesById, getVideogamesByName, postVideogames, deleteVideogames, putVideogames} = require("../controllers/videogame.controller");
const fileMiddlewares = require("../../../middlewares/file.middleware");


const videogamesRouter = express.Router();


videogamesRouter.get("/",getVideogames)
videogamesRouter.get("/:id",getVideogamesById)
videogamesRouter.get("/name/:name",getVideogamesByName)
videogamesRouter.post("/", [fileMiddlewares.upload.single('picture'), fileMiddlewares.uploadToCloudinary], postVideogames)
videogamesRouter.delete("/:id",deleteVideogames)
videogamesRouter.put("/:id",putVideogames)
module.exports = videogamesRouter;