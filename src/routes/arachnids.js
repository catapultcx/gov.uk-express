const express = require('express')
const router = new express.Router()
const arachnids = require('../controllers/arachnids')

router.post('/', arachnids.add)

router.get('/', arachnids.all)
router.get('/add', arachnids.addPage)
router.get('/:id', arachnids.get)
router.get('/update/:id', arachnids.updatePage)

router.post('/delete/:id', arachnids.delete)
router.post('/update/:id', arachnids.update)

module.exports = router
