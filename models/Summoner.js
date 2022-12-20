import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Summoner = new Schema({
    id:String,
    accountid:String,
    puuid:String,
    name:String,
    profileIconId:Number,
    revisionDate:Number,
    summonerLevel:Number
});

export default mongoose.model("summoner", Summoner);