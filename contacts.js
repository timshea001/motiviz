var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var contactSchema   = new Schema({
    number: Number
   , active: Boolean
});

module.exports = mongoose.model('contact', contactSchema);

