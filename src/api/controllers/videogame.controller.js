const Videogame = require("../models/videogame.model");

const getVideogames = async (req, res, next) => {
  try {
    const allVideogames = await Videogame.find();
    return res.status(200).json(allVideogames);
  } catch (error) {
    return next(error);
  }
};
const getVideogamesById = async (req, res, next) => {
  const id = req.params.id;
  try {
      const videogamesById = await Videogame.findById(id);
      if (!videogamesById) {
          return res.status(404).json("Any console exists with this ID");
      }
      return res.status(200).json(videogamesById);
  }
  catch (error) {
      return next(error);
  }
};
const getVideogamesByName = async (req, res, next) => {
  const {name} = req.params;
  const regex = new RegExp(name, "i");
  try {
      const videogamesByName = await Videogame.find({name: regex});
      if (!videogamesByName.length) {
          return res.status(404).json("Any game with this name exists in DB");
      }
      return res.status(200).json(videogamesByName);
  }
  catch (error) {
      return next(error);
  }
};
const postVideogames = async (req, res, next) => {
  try {
    const videogamePicture = req.file ? req.file_url : null;
    const newVideogame = new Videogame({
      name: req.body.name,
      date: req.body.date,
      rating: req.body.rating,
      duration: req.body.duration,
      genre: req.body.genre,
      picture: videogamePicture
    });
    const createdVideogame = await newVideogame.save();
    return res.status(201).json(createdVideogame);
  } catch (error) {
      return next(error);
  }
};
const deleteVideogames = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedVideogame = await Videogame.findByIdAndDelete(id);
    if (!deletedVideogame) {
      return res.status(404).json({ message: "Videogame ID does not exist" });
    }
    return res.status(200).json(deletedVideogame);
  } catch (error) {
      return next(error);
  }
};
const putVideogames = async (req, res, next) => {
  try {
    const { id } = req.params;
    const putVideogame = new Videogame(req.body);
    putVideogame._id = id;

    const updatedVideogame = await Videogame.findByIdAndUpdate(id, putVideogame, {
      new: true,
    });
    if (!updatedVideogame) {
      return res.status(404).json({ message: "Videogame ID does not exist" });
    }
    return res.status(200).json(updatedVideogame);
  } catch (error) {
      return next(error);
  }
};

module.exports = { getVideogames, getVideogamesById, getVideogamesByName, postVideogames, deleteVideogames, putVideogames };
