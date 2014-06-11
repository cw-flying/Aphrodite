var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/:userid', function(req, res) {
//    if (req.is('json')) {
        var userid = req.param('userid');
        var token = req.header('token');
        var data = req.body;
        var msg = [];
        msg.push(JSON.stringify(data));

        // send two messages to the testing topic
        kafkaesque.produce({topic: 'testing', partition: 0},
            msg,
            function(err, response) {
                if (err) {

                } else {

                }
            });
        res.json(200,'ok');
//    } else {
//        res.json(500, { msg: error });
//    }
});

module.exports = router;
