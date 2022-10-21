const express = require('express');
const app = express();
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// App Routes

router.get('/', recipeController.homepage);

module.exports = router;