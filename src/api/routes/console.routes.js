const express = require("express");
const {getConsoles, postConsoles, deleteConsoles, putConsoles} = require("../../controllers/console.controller")
const consolesRouter = express.Router();

consolesRouter.get("/",getConsoles)
consolesRouter.post("/",postConsoles)
consolesRouter.delete("/",deleteConsoles)
consolesRouter.put("/",putConsoles)



module.exports = consolesRouter;