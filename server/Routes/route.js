import express from "express";
import { addUser, getUser, userLogin } from "../Controller/Controller.js";

const router = express.Router();

router.post("/add", addUser);
router.post("/login", userLogin);
router.get("/login", getUser);

export default router;
