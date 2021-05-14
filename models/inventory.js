var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var inventorySchema = new Schema({
    name: {
        type: String,
        required:[true,"Name is required"]
    },
    quantity: {
        type: Number,
    }
});

var Inventory = mongoose.model('item', inventorySchema);
module.exports = Inventory;