import express from 'express'

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Auth endpoint")
})

router.get("/register", (req, res) => {
    res.send("Auth endpoint")
})

router.get("/login", (req, res) => {
    res.send("Auth endpoint")
})

export default router