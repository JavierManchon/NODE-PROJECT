const Console = require("../api/models/console.model");

const getConsoles = async (req, res) => {
  try {
    const allConsoles = await Console.find().populate("titulos", "titulo genero");
    return res.status(200).json(allConsoles);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postConsoles = async (req, res) => {
  try {
    const newConsole = new Autor(req.body);
    const createdConsole = await newConsole.save();
    return res.status(201).json(createdConsole);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteConsoles = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedConsole = await Console.findByIdAndDelete(id);
    if (!deletedConsole) {
      return res.status(404).json({ message: "Console ID does not exist" });
    }
    return res.status(200).json(deletedConsole);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putConsoles = async (req, res) => {
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
    return res.status(500).json(error);
  }
};

module.exports = { getConsoles, postConsoles, deleteConsoles, putConsoles };
