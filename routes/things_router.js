var express = require("express");
var Thing = require("../models/models").Thing;

var router = express.Router();

router.get("/", function(req, res){
    Thing.find({}, function(err, things){
        res.send(things);
    });
});

router.get("/:id", function(req, res){
    Thing.findById(req.params.id, function(err, thing){
        res.send(thing);
    });
});

module.exports = router;