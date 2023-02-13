const express = require('express')
const router = express()
const User = require('../controller/user')

router.post('/', async(req,res) => {
    try {
        const user = await User.register({...req.body})
        if(!user){
            res.redirect('/login');
        }
        res.send(user);
    } catch (err) {
        console.log(err.toString());
        res.send({
            message: err.toString()
        }).status(500)
    }
})

let key = "AKIAIOSFODNN7EXAMPLE"
let secret = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"

module.exports = router
