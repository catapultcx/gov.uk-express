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
    res.render('view-arachnid', { arachnids: data })
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

exports.updatePage = function (req, res) {
  arachnids.get(req.params.id).then((data) => {
    res.render('update-arachnid', { arachnids: data })
  })
}
exports.update = function (req, res) {

  const reqItem = {
    reqUrl : "/update/"+req.params.id,
    body: req.body
  }

  arachnids.update(reqItem).then((data) => {
    res.redirect('/arachnids')
  })
}

exports.delete = function (req, res) {
  arachnids.delete(req.params.id).then(() => {
    res.redirect('/arachnids')
  })
}




