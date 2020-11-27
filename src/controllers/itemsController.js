const itemsServices = require('../services/itemsServices');

const { addItem } = itemsServices;

const controller = {
  addItemController: async (req, res) => {
    const { name, categoryId, categoryName, note, imageUrl } = req.body;
    const query = await addItem({ name, categoryId, categoryName, note, imageUrl });
    if (query) {
      if (!query.code) {
        return res.status(500).json({
          code: 500,
          message: 'Internal server error',
        });
      }
      return res.status(query.code).json(query);
    } else {
      res.status(500).json({
        code: 500,
        message: 'Internal server error',
      });
    }
  },
};

module.exports = controller;
