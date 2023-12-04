const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Videogame = require("../api/models/videogame.model");

const MONGODB_URL = process.env.MONGODB_URL;

const arrayVideogames = [
    {
        name: "EA Sports FC 24",
        date: "2023",
        rating: 4.5,
        duration: 60,
        genre: "Sports"
    },
    {
        name: "Street Fighter V",
        date: "2016",
        rating: 4.2,
        duration: 30,
        genre: "Fighting"
    },
    {
        name: "World of Warcraft",
        date: "2004",
        rating: 4.8,
        duration: 120,
        genre: "MMORPG"
    },
    {
        name: "League of Legends",
        date: "2009",
        rating: 4.7,
        duration: 40,
        genre: "MOBA"
    },
    {
        name: "Gran Turismo Sport",
        date: "2017",
        rating: 4.6,
        duration: 90,
        genre: "Racing"
    },
    {
        name: "The Witcher 3: Wild Hunt",
        date: "2015",
        rating: 4.9,
        duration: 100,
        genre: "RPG"
    },
    {
        name: "NBA 2K22",
        date: "2021",
        rating: 4.4,
        duration: 55,
        genre: "Sports"
    },
    {
        name: "Tekken 7",
        date: "2015",
        rating: 4.3,
        duration: 35,
        genre: "Fighting"
    },
    {
        name: "Final Fantasy XIV",
        date: "2010",
        rating: 4.7,
        duration: 110,
        genre: "MMORPG"
    },
    {
        name: "Dota 2",
        date: "2013",
        rating: 4.8,
        duration: 45,
        genre: "MOBA"
    },
    {
        name: "Forza Horizon 4",
        date: "2018",
        rating: 4.7,
        duration: 85,
        genre: "Racing"
    },
    {
        name: "Skyrim",
        date: "2011",
        rating: 4.9,
        duration: 95,
        genre: "RPG"
    }
];


mongoose.connect(MONGODB_URL)
.then(async () => {
    const allVideogames = await Videogame.find();
    if (allVideogames.length > 0) {
        await Videogame.collection.drop();
        console.log("All videogames have been deleted");
    }
})
.catch((error) => console.log("An error has occured deleting videogames", error))
.then(async () => {
    const videogameMap = arrayVideogames.map((videogame) => new Videogame(videogame));
    await Videogame.insertMany(videogameMap);
    console.log("videogames inserted");
})
.catch((error) => console.log("An error has occured inserting videogames",error))
.finally(() => mongoose.disconnect());