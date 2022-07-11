import express from "express";
import {
  countByCity,
  countByType,
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

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

router.get("/find/:id", getHotel);

router.put("/:id", verifyAdmin, updateHotel);

// Test CountByCity if it works use the initial route

router.delete("/:id", verifyAdmin, deleteHotel);

export default router;
