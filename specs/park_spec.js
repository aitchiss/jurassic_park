var assert = require('assert')
var Park = require('../park.js')
var Dinosaur = require('../dinosaur.js')

describe('Park', function(){

  var park
  var plesiosaur
  var pterodactyl
  var stegosaurus

  beforeEach(function(){
    park = new Park
    plesiosaur = new Dinosaur("Plesiosaur", 4)
    pterodactyl = new Dinosaur("Pterodactyl", 1)
    stegosaurus = new Dinosaur("Stegosaurus", 3)
  })

  it('starts with empty enclosure', function(){
    assert.strictEqual(0, park.enclosure.length)
  })

  it('can add a dinosaur to enclosure', function(){
    park.addToEnclosure(plesiosaur)
    assert.strictEqual(1, park.enclosure.length)
  })

  it('can remove all dinosaurs of a type from enclosure', function(){
    park.addToEnclosure(plesiosaur)
    park.addToEnclosure(plesiosaur)
    park.addToEnclosure(stegosaurus)
    park.addToEnclosure(stegosaurus)
    park.addToEnclosure(stegosaurus)
    park.addToEnclosure(pterodactyl)
    park.removeAllTypeFromEnclosure('Plesiosaur')
    assert.strictEqual(4, park.enclosure.length)
  })

  it('can find all dinosaurs with more than 2 offspring a year', function(){
    park.addToEnclosure(plesiosaur)
    park.addToEnclosure(plesiosaur)
    park.addToEnclosure(stegosaurus)
    park.addToEnclosure(stegosaurus)
    park.addToEnclosure(stegosaurus)
    park.addToEnclosure(pterodactyl)
    var dinosWithMoreThanTwoOffspringAYear = park.moreThanTwoOffspringAYear()
    assert.strictEqual(5, dinosWithMoreThanTwoOffspringAYear.length)

  })
})