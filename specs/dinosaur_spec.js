var assert = require('assert')
var Dinosaur = require('../dinosaur.js')

describe('Dinosaur', function(){

  var dinosaur

  beforeEach(function(){
    dinosaur = new Dinosaur('Brachiosaurus', 3);
  })

  it('has a type', function(){
    assert.strictEqual('Brachiosaurus', dinosaur.type)
  })

  it('has a number of offspring per year', function(){
    assert.strictEqual(3, dinosaur.offspringPerYear)
  })

})