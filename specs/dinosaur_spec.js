var assert = require('assert')
var Dinosaur = require('../dinosaur.js')

describe('Dinosaur', function(){

  var dinosaur

  beforeEach(function(){
    dinosaur = new Dinosaur('Brachiosaurus');
  })

  it('has a type', function(){
    assert.strictEqual('Brachiosaurus', dinosaur.type)
  })

})