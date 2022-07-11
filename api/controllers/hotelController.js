import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();

    res.status(200).json({
      status: 200,
      data: { ...savedHotel._doc },
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query

  try {
    const hotels = await Hotel.find({...others, cheapestPrice: {
      $gte:min | 1, $lte: max || 9999
    }}).limit(req.query.limit);

    res.status(200).json({
      status: 200,
      data: hotels,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    res.status(200).json({
      status: 200,
      data: hotel,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");

  try {
    const list = await Promise.all(
      cities.map((city) => {
        // return Hotel.find({city:city}).length
        return Hotel.countDocuments({ city: city });
      })
    );

    res.status(200).json(list);

    // res.status(200).json({
    //   status: 200,
    //   data: { list },
    //   message: "Success",
    // });
  } catch (error) {
    next(error);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json({
      status: 200,
      data: [
        { type: "hotels", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ],
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      status: 200,
      data: { ...updatedHotel._doc },
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 200,
      data: "Hotel deleted",
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};
