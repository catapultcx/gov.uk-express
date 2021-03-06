require('should')

const http = require('http')
const request = require('supertest')
const url = 'http://localhost:2999'
const fs = require('fs')
const decache = require('decache')

let server
let app
let agent

function startServer (done) {
  let port = process.env.PORT || '2999'
  app = require('../../src/app')
  decache('../../src/app')
  app.set('port', port)
  server = http.createServer(app)
  server.listen(port)
  server.on('listening', () => {
    agent = request.agent(server)
    done()
  })
  server.on('error', (error) => {
    console.log(error)
  })
}

describe('/', function () {

  beforeEach('Setup', function (done) {
    startServer(done)
  })

  it('should load homepage', function () {
    return agent.get('/').expect(200).then(data => {
      data.text.includes('Welcome to the GOV.UK service').should.be.true()
    })
  })

  it('should not load login', function () {
    return agent.get('/login').
    expect(404).
    catch(err => {
      err.body.should.equal('Page not implemented yet')
    })
  })

  it('should not load signup', function () {
    return agent.get('/signup').expect(404).catch(err => {
      err.body.should.equal('Page not implemented yet')
    })
  })

  afterEach('Teardown', function () {
    console.log('Teardown')
    server.close()
    server = undefined
    app = undefined
  })
})
