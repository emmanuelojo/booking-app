import User from "../models/User.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: 200,
      data: { users },
      message: "Success",
    });
  } catch (error) {
    // res.status(500).json(error);
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: 200,
      data: { ...user._doc },
      message: "Success",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      status: 200,
      data: { ...updatedUser._doc },
      message: "Success",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 200,
      data: "User deleted",
      message: "Success",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
