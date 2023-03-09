var mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
   name: String,
   status:Number,
   ordering:Number
 });


module.exports = mongoose.model('item', itemSchema);
