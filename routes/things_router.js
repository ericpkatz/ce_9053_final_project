var express = require("express");
var Thing = require("../models/models").Thing;

var router = express.Router();

router.get("/", function(req, res){
    Thing.find({}, function(err, things){
        res.send(things);
    });
});

module.exports = router;