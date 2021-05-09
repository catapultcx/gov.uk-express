require('dotenv').config()
const Reptiles = require('../services/reptiles')
const reptiles = new Reptiles(process.env.API_URL)

exports.all = function (req, res) {
  reptiles.all().then((data) => {
    res.render('reptiles', { reptiles: data })
  })
}

exports.get = function (req, res) {
  reptiles.get(req.params.id).then((data) => {
    res.render('view-reptile', { reptile: data })
  })
}

exports.editPage = function (req, res) {
  reptiles.get(req.params.id).then((data) => {
    res.render('edit-reptile', { reptile: data })
  })
}

exports.edit = function (req, res) {
 reptiles.update(req.body, req.params.id).then(() => {
     res.redirect('/reptiles')
   })
}

exports.addPage = function (req, res) {
  res.render('add-reptile')
}

exports.add = function (req, res) {
  reptiles.create(req.body).then(() => {
    res.redirect('/reptiles')
  })
}

exports.delete = function (req, res) {
  reptiles.delete(req.params.id).then(() => {
    res.redirect('/reptiles')
  })
}