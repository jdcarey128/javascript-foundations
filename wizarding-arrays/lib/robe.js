class Robe {
  constructor() {
    this.pockets = [...new Array(10)].map(element => [])
  }

  addToPocket(potion) {
    for (var i = 0; i < this.pockets.length; i ++) {
      if (this.pockets[i].length === 0) {
        this.pockets[i].push(potion)
        break;
      }
    }
  }

  retrieve(potion) {
    for (var i = 0; i < this.pockets.length; i ++) {
      if (this.pockets[i][0] === potion) {
        var retrievedPotion = this.pockets[i]
        this.pockets[i] = []
        return retrievedPotion
      }
    }
  }

  emptyAllPockets() {
    this.pockets.map(pocket => {
      pocket = []
    })
  }
}

module.exports = Robe;
