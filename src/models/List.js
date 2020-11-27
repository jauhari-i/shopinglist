const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  listId: {
    type: String,
    unique: true,
  },
  items: {
    type: Array,
    default: [],
  },
  listStatus: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('list', listSchema);
