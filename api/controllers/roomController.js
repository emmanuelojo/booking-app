import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;

  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();

    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(err);
    }

    res.status(200).json({
      status: 200,
      data: { ...savedRoom._doc },
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({
      status: 200,
      data: { rooms },
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);

    res.status(200).json({
      status: 200,
      data: { ...room._doc },
      message: "Success",
    });
  } catch (error) {
    next(error);ß
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      status: 200,
      data: { ...updatedRoom._doc },
      message: "Success",
    });
  } catch (error) {
    next(error);ß
  }
};

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;

  try {
    await Room.findByIdAndDelete(req.params.id);

    try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (error) {
        next(err);
      }
      
    res.status(200).json({
      status: 200,
      data: "Room deleted",
      message: "Success",
    });
  } catch (error) {
    next(error);ß
  }
};
