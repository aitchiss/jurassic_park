var assert = require('assert')
var Park = require('../park.js')

describe('Park', function(){

  var park

  beforeEach(function(){
    park = new Park
  })

  it('starts with empty enclosure', function(){
    assert.strictEqual(0, park.enclosure.length)
  })
})