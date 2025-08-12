const express = require('express');
const router = express.Router();
const controller = require('../controllers/gameController');

router.get('/games', controller.getAll);
router.get('/games/:id', controller.getById);
router.post('/games', controller.create);
router.put('/games/:id', controller.update);
router.delete('/games/:id', controller.remove);

module.exports = router;
