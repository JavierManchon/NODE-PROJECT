const Videogame = require("../api/models/videogame.model");

const getVideogames = async (req, res) => {
  try {
    const allVideogames = await Videogame.find();
    return res.status(200).json(allVideogames);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postVideogames = async (req, res) => {
  try {
    const newVideogame = new Videogame({
      name: req.body.name,
      date: req.body.date,
      rating: req.body.rating,
      duration: req.body.duration,
      genre: req.body.genre
    });
    const createdVideogame = await newVideogame.save();
    return res.status(201).json(createdVideogame);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteVideogames = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVideogame = await Videogame.findByIdAndDelete(id);
    if (!deletedVideogame) {
      return res.status(404).json({ message: "Videogame ID does not exist" });
    }
    return res.status(200).json(deletedVideogame);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putVideogames = async (req, res) => {
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
    return res.status(500).json(error);
  }
};

module.exports = { getVideogames, postVideogames, deleteVideogames, putVideogames };
