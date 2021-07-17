class WebService {
  constructor (url) {
    this.url = url
    this.agent = require('superagent')
  }

  all () {
    return this.agent.get(this.url).then((data) => {
      return data.body
    })
  }

  // This will give a 405 if the underlying web service does not support delete
  delete (id) {
    return this.agent.delete(`${this.url}/${id}`).then((data) => {
      return data.body
    })
  }

  get (id) {
    return this.agent.get(`${this.url}/${id}`).then((data) => {
      return data.body
    })
  }

  create (item) {
    return this.agent.post(this.url).send(item).then((data) => {
      return data.body
    })
  }

  update (item) {
    return this.agent.put(`${this.url}/${item.id}`).send(item).then((data) => {
      return data.body
    })
  }
}

module.exports = WebService
