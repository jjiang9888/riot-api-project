import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Champion = new Schema({
    name:String,
    title:String,
    blurb:String
});

export default mongoose.model("champion", Champion);