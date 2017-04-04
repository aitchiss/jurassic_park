
var Park = function(){
  this.enclosure = []
}

Park.prototype = {
  addToEnclosure: function(dinosaur){
    this.enclosure.push(dinosaur)
  }
}

module.exports = Park