require('dotenv').config()
const Cats = require('../services/cats')
const cats = new Cats(process.env.API_URL)

exports.all = function (req, res) {
  cats.all().then((data) => {
    res.render('cats', { cats: data })
  })
}

exports.get = function (req, res) {
  cats.get(req.params.id).then((data) => {
    res.render('view-cat', { cat: data })
  })
}

exports.addPage = function (req, res) {
  res.render('add-cat')
}

exports.add = function (req, res) {
  cats.create(req.body).then(() => {
    res.redirect('/cats')
  })
}

exports.edit = function (req, res) {
  cats.get(req.params.id).then((data) => {
    res.render('edit-cat', { cat: data })
  })
}

exports.update = function (req, res) {
  cats.update(req.body).then((data) => {
    res.render('edit-cat', { cat: data })
  })
}

