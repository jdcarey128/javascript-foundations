class Fairy {
  constructor(name) {
    this.name = name 
    this.dust = 10
    this.clothes = {dresses: ['Iris']}
    this.disposition = 'Good natured'
    this.humanWards = []
  }

  receiveBelief() {
    this.dust += 1
  }

  believe() {
    this.dust += 10
  }

  makeDresses(dresses) {
    this.clothes.dresses.push(dresses)
    this.clothes.dresses = this.clothes.dresses.flat()
  }

  becomeProvoked() {
    this.disposition = 'Vengeful'
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      this.humanWards.push(infant)
      infant.disposition = 'Malicious'
    }
    return infant
  }
}

module.exports = Fairy;
