import { Router } from "express";
import { create, find, findOne, update, remove } from "../controllers/designs.controller.js";

const router = Router();

router.post("/", create)
router.get("/", find)
router.get("/:id", findOne)
router.put("/:id", update)
router.delete("/:id", remove)

export default router;