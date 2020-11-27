const router = require('express').Router();
const basicAuth = require('../middlewares/basicAuth');

const { addItemController } = require('../controllers/itemsController');

router.get('/', (req, res) => {
  res.send('API');
});

router.post('/item/create', basicAuth, addItemController);

module.exports = router;
