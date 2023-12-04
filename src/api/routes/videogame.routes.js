const express = require("express");
const {getVideogames,getVideogamesById, getVideogamesByName, postVideogames, deleteVideogames, putVideogames} = require("../controllers/videogame.controller");

const videogamesRouter = express.Router();


videogamesRouter.get("/",getVideogames)
videogamesRouter.get("/:id",getVideogamesById)
videogamesRouter.get("/name/:name",getVideogamesByName)
videogamesRouter.post("/",postVideogames)
videogamesRouter.delete("/:id",deleteVideogames)
videogamesRouter.put("/:id",putVideogames)
module.exports = videogamesRouter;