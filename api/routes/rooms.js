import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:hotelId", verifyAdmin, createRoom);

router.get("/", getAllRooms);

router.get("/:id", getRoom);

router.put("/:id", verifyAdmin, updateRoom);

router.delete("/:hotelId/:id", verifyAdmin, deleteRoom);

export default router;
