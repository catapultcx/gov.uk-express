const WebService = require('./webservice')

class Arachnids extends WebService {
  constructor (url) {
    super(`${url}/arachnids`)
  }
}

module.exports = Arachnids
