const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videogamesSchema = new Schema(
    {
        name:{type:String,require:true},
        date:{type:String,require:true},
        rating:{type:Number},
        duration:{type:Number},
        genre:{type:String, enum:["Sports", "Fighting", "MMORPG", "MOBA", "Racing", "RPG"]},
        picture:{type: String}
    },{
        timestamps:true
    }
)

const Videogame = mongoose.model("videogame", videogamesSchema);

module.exports = Videogame;
