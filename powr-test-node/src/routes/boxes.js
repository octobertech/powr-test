var express = require('express');
var router = express.Router();
const boxesController = require('../controllers/boxesController');

/* POST boxes and return id. */
router.post('/', (req, res, next) => {
  boxesController.setBoxes(req, res, next)
});

/* GET boxes by id. */
router.get('/:boxId', (req, res, next) => {
  boxesController.findBoxes(req, res, next)
});



module.exports = router;
