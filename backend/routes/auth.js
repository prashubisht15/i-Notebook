const router = require("express").Router()
const User = require('../models/Users')
//create a new user using : Post "/api/auth". Doesn't require auth

router.post('/',async (req, res) => {
    console.log(req.body)
    try{
        const user =  User(req.body)
        await user.save()
        res.send('hello')
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

module.exports = router