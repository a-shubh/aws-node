const MQServices = require('../services/MQServices');
const verify = require('../middleware/verify')
const router = require('express').Router()

router.get('/', verify, async(req, res) => {
    try {
        console.log('Trying to logout');
        res.clearCookie("secret")
        console.log('Token deleted');
        const {queueName} = req.body
        await MQServices.publishToQueue(queueName, "Logout");
        console.log('Loged out');
        res.status(200).send({
            'msg': 'Logout Successful',
            'message-sent' : true
        })
    } catch (err) {
        console.log(err.toString());
        res.status(500).send(err.toString())
    }
})

module.exports = router