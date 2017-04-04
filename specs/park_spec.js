var assert = require('assert')
var Park = require('../park.js')
var Dinosaur = require('../dinosaur.js')

describe('Park', function(){

  var park
  var dinosaur

  beforeEach(function(){
    park = new Park
    dinosaur = new Dinosaur("Plesiosaur", 4)
  })

  it('starts with empty enclosure', function(){
    assert.strictEqual(0, park.enclosure.length)
  })

  it('can add a dinosaur to enclosure', function(){
    park.addToEnclosure(dinosaur)
    assert.strictEqual(1, park.enclosure.length)
  })
})