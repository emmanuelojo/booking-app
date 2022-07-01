import express from 'express'
import Hotel from '../models/Hotel.js'

const router = express.Router()

router.post("/", async(req, res) => {
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()

        res.status(200).json({
            status: 200,
            data: {...savedHotel._doc}, 
            message: "Success"
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/", async(req, res) => {
    try {
        const hotels = await Hotel.find()

        res.status(200).json({
            status: 200,
            data: {hotels}, 
            message: "Success"
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/:id", async(req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})

        res.status(200).json({
            status: 200,
            data: {...updatedHotel._doc}, 
            message: "Success"
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete("/:id", async(req, res) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: 200, 
            message: "Success"
        })
    } catch (error) {
        res.status(500).json(error)
    }
})
export default router