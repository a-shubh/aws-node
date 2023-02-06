var amqp = require('amqplib/callback_api');
const CONN_URL = 'amqps://hmvzuxvv:kJp-OcEDKLM-37IPmwGEh7I2FaLAE-7S@moose.rmq.cloudamqp.com/hmvzuxvv';

function start() {
    try {

        amqp.connect(CONN_URL, function (err, conn) {
            conn.createChannel(function (err, ch) {
                ch.consume('user-messages', function (msg) {
                    console.log('.....');
                    setTimeout(function () {
                        console.log("Message:", msg.content.toString());
                    }, 4000);
                    ch.ack(msg);
                }, 
                { noAck: false });
            });
        });
    } catch (err) {
        console.log("Error: ", err.toString());
    }
}

module.exports =  { start }