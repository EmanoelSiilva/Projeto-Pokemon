const express = require('express')
const router = express.Router()

const apiController = require('../controllers/apiController')

router.get('/teste', apiController.test)
router.get('/', apiController.details)
router.post('/add', apiController.add)
router.delete('/:id', apiController.delete)
router.patch('/:id', apiController.update)
module.exports = router