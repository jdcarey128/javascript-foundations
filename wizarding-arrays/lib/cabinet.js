class Cabinet {
  constructor() {
    this.potions = []
  }

  add(potion) {
    this.potions.push(potion)
    this.potions = this.potions.flat()
  }

  takeFirstPotion() {
    return this.potions.shift()
  }

  takePotionWithName(name) {
    var potionIndex = this.potions.findIndex(potion => potion.name === name)
    return this.potions.splice(potionIndex, 1)[0]
  }

  isEmpty() {
    return this.potions.length === 0
  }

  count(potionSearch) {
    return this.potions.reduce((totalDuplicates, potion) => {
      return potion.name === potionSearch ? (totalDuplicates + 1) : (totalDuplicates + 0)
    }, 0)
  }
}

module.exports = Cabinet;
