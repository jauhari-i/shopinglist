const mongoose = require('mongoose');

const ItemsSchema = new mongoose.Schema({
  itemId: {
    type: String,
    unique: true,
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
  note: {
    type: String,
    default: '',
  },
  imageUrl: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('item', ItemsSchema);
