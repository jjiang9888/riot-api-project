import db from "../db/connection.js";
import Champion from "../models/Champion.js";
import championdata from "./ChampionData.json" assert {type:'json'};

const insertData =  async () => {
    await db.dropDatabase();

    await Champion.create(championdata);

    await db.close();
};

insertData();