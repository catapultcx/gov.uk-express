const express = require('express')
const router = new express.Router()
const cats = require('../controllers/cats')

router.get('/', cats.all)
router.get('/add', cats.addPage)
router.get('/:id', cats.get)
router.post('/', cats.add)

router.get('/update/:id', cats.updatePage)
router.post('/update/:id', cats.update)

module.exports = router
