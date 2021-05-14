var express = require('express');
const Inventory = require('../models/inventory');
var router = express.Router();

router.get('/inventory', function(req,res){
    Inventory.find({}).then(function(items){
        res.send(items);
    })
});

router.post('/inventory', function(req,res){
    Inventory.create(req.body).then(function(item){
        res.send(item);
    });
});

router.put('/inventory/:name', function(req,res){
    Inventory.findByIdAndUpdate({name: req.params.name},req.body).then(function(item){
       res.send(item); 
    })
});

router.delete('/inventory/:name', function(req,res){
    Inventory.findByIdAndRemove({name: req.params.name}).then(function(){
        Inventory.findOne({name: req.params.name}).then(function(item){
            res.send(item);
        });
    });
});

module.exports = router;