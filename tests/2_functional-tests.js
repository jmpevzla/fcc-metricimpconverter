const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  test('Convert a valid input, GET /api/convert?input=10L', function(done) {
    chai
      .request(server)
      .get('/api/convert?input=10L')
      .end(function (err, res) {
        assert.equal(res.status, 200, 'Response status should be 200')

        const obj = { 
          initNum: 10, 
          initUnit: 'L', 
          returnNum: 2.64172, 
          returnUnit: 'gal', 
          string: '10 liters converts to 2.64172 gallons' 
        }
        const objText = JSON.stringify(obj)
        assert.equal(res.text, objText, `Response should be ${objText}`)
        done()
      })
  })

});
