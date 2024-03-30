// models/client.js
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  mobileNo: String,
  project: String
});

module.exports = mongoose.model('Client', clientSchema);
