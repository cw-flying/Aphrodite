var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/:userid', function(req, res) {
//    if (req.is('json')) {
        var userid = req.param('userid');
        var token = req.header('token');
        var data = req.body;
        var msg = [];

        console.log(data);
        msg.push(JSON.stringify(data));
        console.log(msg);

        // send two messages to the testing topic
        kafkaesque.produce({topic: 'testing', partition: 0},
            msg,
            function(err, response) {
                if (err) {
                    console.log(err);
                } else {

                }
                console.log(response);
            });
        res.json(200,'ok');
//    } else {
//        res.json(500, { msg: error });
//    }
});

module.exports = router;
