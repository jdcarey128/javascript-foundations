class Wizard {
  constructor(details) {
    this.name = details.name
    this.pets = []
    this.petsCount = 0
    this.wand = null
  }

  adoptPet(pet) {
    this.pets.push(pet)
    this.petsCount += 1
  }

  getWand(wand) {
    this.wand = wand 
  }

  castSpell(spell) {
    return this.wand.cast(spell)
  }

  petList() {
    return this.pets.reduce((sentence, pet) => {
      var vowels = ("aeiouAEIOU")
      if (vowels.indexOf(pet.type[0]) !== -1) {
        return sentence + ` An ${pet.type} named ${pet.name};`
      } else {
        return sentence + ` A ${pet.type} named ${pet.name};`
      }
    }, '').slice(1, -1) + '.'
  }
  
}

module.exports = Wizard;
