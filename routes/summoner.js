import {Router} from "express";
import * as controller from "../controller/summoner.js";

const router=Router();

router.get("/", controller.getSummoners);
router.get("/:id", controller.getSummoner);
router.post("/",controller.createSummoner);
router.put("/:id", controller.updateSummoner);
router.delete("/:id",controller.deleteSummoner);

export default router;