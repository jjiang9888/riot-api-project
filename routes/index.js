import {Router} from "express";

import summonerRoutes from "./summoner.js";


const router= Router();

router.get("/", (req, res)=> {
    res.send("API Root");
});

router.use("/summoner", summonerRoutes);


export default router;