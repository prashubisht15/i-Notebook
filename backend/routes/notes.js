const router = require("express").Router()

router.get('/',(req, res) => {
    obj={
        a:"thadsfasdfiosd",
        number:34
    }
    res.json(obj)
})

module.exports = router