
var Park = function(){
  this.enclosure = []
}

Park.prototype = {
  addToEnclosure: function(dinosaur){
    this.enclosure.push(dinosaur)
  },

  removeAllTypeFromEnclosure(type){
    var dinosToDelete = this.identifyDinosaurs(type)

    for (dino of dinosToDelete){
      var index = this.enclosure.indexOf(dino)
      this.enclosure.splice(index, 1)
    }
  },

  identifyDinosaurs: function(type){
    var dinos = []
    for (var i = 0; i < this.enclosure.length; i++){
      var dinosaur = this.enclosure[i]
      if (dinosaur.type === type){
        dinos.push(dinosaur)
      }
    }
    return dinos
  }
}

module.exports = Park