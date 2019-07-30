const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Data = new Schema({
  song_country: {
    type: String
  },
  song_YTID: {
    type: String
  },
  song_YTUrl: {
    type: String
  },
  song_Name: {
    type: String
  }
});
module.exports = mongoose.model('Data', Data);
