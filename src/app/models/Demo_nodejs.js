const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const demo_nodejs = new Schema({
    name: { type: String, maxLength:225},
    description: { type: String, maxLength:600},
    imge: { type: String, maxLength:255},
    createdAt:{type: Date, default: Date.now},
    updatedAt:{type: Date, default: Date.now},  
  });

  module.exports = mongoose.model('courses',demo_nodejs);