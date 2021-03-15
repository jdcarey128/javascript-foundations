class Potion {
  constructor(name, rareness = 0) {
    this.name = name 
    this.rareness = rareness
    this.rareScore = 7
  }


  isRare() {
    return this.rareness > this.rareScore
  }
}

module.exports = Potion;
