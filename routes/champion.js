import {Router} from "express";
import * as controller from "../controller/champion.js";

const router=Router();

router.get("/", controller.getChampions);
router.get("/:id", controller.getChampion);
router.post("/",controller.createChampion);
router.put("/:id", controller.updateChampion);
router.delete("/:id",controller.deleteChampion);

export default router;