const Console = require("../models/console.model");

const getConsoles = async (req, res, next) => {
  try {
    const allConsoles = await Console.find().populate("videogames");
    return res.status(200).json(allConsoles);
  } catch (error) {
    return next(error);
  }
};
const getConsolesById = async (req, res, next) => {
  const id = req.params.id;
  try {
      const consolesById = await Console.findById(id);
      if (!consolesById) {
          return res.status(404).json("Any console exists with this ID");
      }
      return res.status(200).json(consolesById);
  }
  catch (error) {
    return next(error);
  }
};
const getConsolesByName = async (req, res, next) => {
  const {name} = req.params;
  const regex = new RegExp(name, "i");
  try {
      const consolesByName = await Console.find({name: regex});
      if (!consolesByName.length) {
          return res.status(404).json("Any console with this name exists in DB");
      }
      return res.status(200).json(consolesByName);
  }
  catch (error) {
      return next(error);
  }
};
const postConsoles = async (req, res, next) => {
  try {
    const consolePicture = req.file ? req.file_url : null;
    const newConsole = new Console({
      name: req.body.name,
      portability: req.body.portability,
      videogames: [],
      picture: consolePicture
    });
    const createdConsole = await newConsole.save();
    return res.status(201).json(createdConsole);
  } catch (error) {
      return next(error);
  }
};
const deleteConsoles = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedConsole = await Console.findByIdAndDelete(id);
    if (!deletedConsole) {
      return res.status(404).json({ message: "Console ID does not exist" });
    }
    return res.status(200).json(deletedConsole);
  } catch (error) {
      return next(error);
  }
};
const putConsoles = async (req, res, next) => {
  try {
    const { id } = req.params;
    const putConsole = new Console(req.body);
    putConsole._id = id;

    const updatedConsole = await Autor.findByIdAndUpdate(id, putConsole, {
      new: true,
    });
    if (!updatedConsole) {
      return res.status(404).json({ message: "Console ID does not exist" });
    }
    return res.status(200).json(updatedConsole);
  } catch (error) {
      return next(error);
  }
};
const addVideogames = async (req, res, next) => {
  try {
      const {consoleId} = req.body;
      const {videogameId} = req.body;
      const consoleUpdated = await Console.findByIdAndUpdate(
        consoleId, 
        {$push: {videogames: videogameId}},
        { new: true });
      return res.status(200).json(consoleUpdated);
  }
  catch (error) {
      return next(error);
  }
};

module.exports = { getConsoles, getConsolesById, getConsolesByName, postConsoles, deleteConsoles, putConsoles, addVideogames };
