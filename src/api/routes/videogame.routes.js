const express = require("express");
const {getVideogames, postVideogames, deleteVideogames, putVideogames} = require("../../controllers/videogame.controller");

const videogamesRouter = express.Router();


videogamesRouter.get("/",getVideogames)
videogamesRouter.post("/",postVideogames)
videogamesRouter.delete("/:id",deleteVideogames)
videogamesRouter.put("/:id",putVideogames)
module.exports = videogamesRouter;