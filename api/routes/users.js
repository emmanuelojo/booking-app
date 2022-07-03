import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello, you are logged in...")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Hello, you are logged in and can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Hello, you are an admin")
})

router.get("/", verifyAdmin, getAllUsers);

router.get("/:id", verifyUser, getUser);

router.put("/:id", verifyUser, updateUser);

router.delete("/:id",verifyUser, deleteUser);

export default router;
