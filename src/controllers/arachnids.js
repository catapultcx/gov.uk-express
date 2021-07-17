require('dotenv').config()
const Arachnids = require('../services/arachnids')
const arachnids = new Arachnids(process.env.API_URL)

exports.all = function (req, res) {
  arachnids.all().then((data) => {
    res.render('arachnids', { arachnids: data })
  })
}

exports.get = function (req, res) {
  arachnids.get(req.params.id).then((data) => {
    res.render('view-arachnid', { arachnid: data })
  })
}

exports.addPage = function (req, res) {
  res.render('add-arachnid')
}

exports.add = function (req, res) {
  arachnids.create(req.body).then(() => {
    res.redirect('/arachnids')
  })
}

