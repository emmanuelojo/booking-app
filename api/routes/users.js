import express from 'express'

const router = express.Router()

router.get("/", (req, res) => {
    req.send("Auth endpoint")
})

export default router