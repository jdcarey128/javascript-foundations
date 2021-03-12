class Human {
  constructor(name) {
    this.name = name
    this.encounterCounter = 0
    this.seesOgre = false 
    this.knockedOut = false 
  }

  addEncounter(ogre) {
    this.encounterCounter += 1
    if (this.encounterCounter > 0 && this.encounterCounter % 3 === 0) {
      ogre.swingAt(this)
      this.seesOgre = true 
    } else {
      this.seesOgre = false 
    }
  }

  noticesOgre() {
    return this.seesOgre
  }

  knockOut() {
    this.knockedOut = true
  }

  wakeUp() {
    this.knockedOut = false 
  }
}

module.exports = Human;
