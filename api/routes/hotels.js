import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);

router.get("/", getAllHotels);

router.get("/countByCity", getAllHotels);

router.get("/countByType", getAllHotels);

router.get("/:id", getHotel);

router.put("/:id", verifyAdmin, updateHotel);

// Test CountByCity if it works use the initial route

// router.delete("/:id", verifyAdmin, deleteHotel);
router.delete("/find/:id", verifyAdmin, deleteHotel);

export default router;
