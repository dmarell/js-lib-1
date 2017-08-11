const should = require('should')
const StringUtils = require('../lib/string-utils')

describe("String Utils tests", () => {
  it('Test toUpperCase', done => {
    const s = StringUtils.toUpperCase('hej')
    s.should.be.equal('HEJ')
    done();
  })

  // it('Test that', done => {
  //   // const list = new LinkedList()
  //   // list.length().should.be.exactly(0)
  //   // list.append('value')
  //   // list.length().should.be.exactly(1)
  //   done();
  // })
})