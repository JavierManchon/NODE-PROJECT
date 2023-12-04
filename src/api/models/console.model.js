const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const Schema = mongoose.Schema;

const consolesSchema = new Schema(
    {
        name:{type:String,require:true},
        portability:{type: Boolean},
        videogames:[{type:Schema.Types.ObjectId,ref:"videogame"}]
    },{
        timestamps:true
    }
)

const Console = mongoose.model("console", consolesSchema);

module.exports = Console;
