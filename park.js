
var Park = function(){
  this.enclosure = []
}

Park.prototype = {
  addToEnclosure: function(dinosaur){
    this.enclosure.push(dinosaur)
  },

  removeAllTypeFromEnclosure(type){
    var dinosToDelete = []
    for (var i = 0; i < this.enclosure.length; i++){
      var dinosaur = this.enclosure[i]
      if (dinosaur.type === type){
        dinosToDelete.push(dinosaur)
      }
    }

    for (dino of dinosToDelete){
      var index = this.enclosure.indexOf(dino)
      this.enclosure.splice(index, 1)
    }
  }
}

module.exports = Park