var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var lyricSchema   = new Schema({
    lyric: String
});

module.exports = mongoose.model('Lyric', lyricSchema);

