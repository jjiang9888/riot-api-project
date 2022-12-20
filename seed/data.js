import db from "../db/connection.js";
import Summoner from "../models/Summoner.js";
import summoner from "./SummonerData.json" assert {type:'json'};

const insertData =  async () => {
    await db.dropDatabase();

    await Summoner.create(summoner);

    await db.close();
};

insertData();