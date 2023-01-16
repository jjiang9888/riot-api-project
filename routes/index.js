import {Router} from "express";

import championRoutes from "./champion.js";


const router= Router();

router.get("/", (req, res)=> {
    res.send("RIOTAPI");
});

router.use("/champions", championRoutes);


export default router;