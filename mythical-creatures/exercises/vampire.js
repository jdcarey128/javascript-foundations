class Vampire {
  constructor(name, pet = 'bat') {
    this.name = name
    this.pet = pet
    this.thirsty = true
    this.ouncesDrank = 0
  }

  drink() {
    if (this.ouncesDrank >= 50) {
      this.thirsty = false
      return "I'm too full to drink anymore!"
    } else {
      this.ouncesDrank += 10
    }
  }

}

module.exports = Vampire;
