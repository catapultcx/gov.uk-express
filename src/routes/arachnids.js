const express = require('express')
const router = new express.Router()
const arachnids = require('../controllers/arachnids')

router.get('/', arachnids.all)
router.get('/add', arachnids.addPage)
router.get('/delete/:id', arachnids.delete)
router.get('/:id', arachnids.get)
router.post('/', arachnids.add)
router.get('/edit/:id', arachnids.edit)
router.put('/', arachnids.update)

module.exports = router
