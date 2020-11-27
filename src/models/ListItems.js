const mongoose = require('mongoose');

const listItemSchema = new mongoose.Schema({
  listItemId: {
    type: String,
    unique: true,
  },
  itemId: {
    type: String,
  },
  itemName: {
    type: String,
  },
  categoryId: {
    type: String,
  },
  categoryName: {
    type: String,
  },
  value: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('listItem', listItemSchema);
