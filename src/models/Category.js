const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryId: {
    type: String,
    unique: true,
  },
  categoryName: {
    type: String,
  },
  itemsLength: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('category', categorySchema);
