require('dotenv').config()
require('should')

const Arachnids = require('../../src/services/arachnids')
const service = new Arachnids(process.env.API_URL)
let created

describe('arachnids', function () {

  it('get create an arachnid', function () {
    let item = { name: 'Spider McSpiderface', description: 'Hairy' }
    return service.create(item).then((data) => {
      data.name.should.eql(item.name)
      data.description.should.eql(item.description)
      data.should.have.property('id')
      created = data
    })
  })

  it('update an arachnid', function () {
    let item = { name: 'Spider McSpiderface', description: 'Hairy' }
    return service.update(item).then((data) => {
      data.name.should.eql(item.name)
      data.description.should.eql(item.description)
      data.should.have.property('id')
      created = data
    })
  })

  it('get a created arachnid', function () {
    return service.get(created.id).then((data) => {
      data.name.should.eql(data.name)
      data.id.should.eql(data.id)
      data.description.should.eql(data.description)
    })
  })

  it('get all arachnids', function () {
    return service.all().then((data) => {
      data.should.have.property('length')
    })
  })

})
