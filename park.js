
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
  },

  moreThanTwoOffspringAYear: function(){
    var foundDinos = []
    for (dino of this.enclosure){
      if (dino.offspringPerYear > 2){
        foundDinos.push(dino)
      }
    }
    return foundDinos
  },

  numberOfFutureDinos: function(noOfYears){
    var total = this.enclosure.length
    for (dino of this.enclosure){
      if (noOfYears > 1){
        var noToAdd = Math.pow(dino.offspringPerYear, noOfYears)
        total += noToAdd
      }
      total += dino.offspringPerYear
    }
    
    return total
  }



}

module.exports = Park