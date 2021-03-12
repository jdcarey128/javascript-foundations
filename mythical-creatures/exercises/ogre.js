class Ogre {
  constructor(details) {
    this.name = details.name
    this.home = details.abode ? details.abode : 'Swamp' 
    this.swings = 0
  }

  encounter(human) {
    human.addEncounter(this)
  }

  swingAt(human) {
    this.swings += 1
    if (this.swings > 0 && this.swings % 2 === 0) {
      human.knockOut()
    }
  }

  apologize(human) {
    human.wakeUp()
  }
}


module.exports = Ogre;
