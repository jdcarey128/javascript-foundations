class Spell {
  constructor(name, description) {
    this.name = name 
    this.description = description
    this.executionHistory = []
  }

  execute(target) {
    const message = "Success! You've cast a spell on the "
    if (Array.isArray(target)) {
      return target.reduce((sentence, objectTarget) => {
        this.executionHistory.push(objectTarget)
        return sentence + message + `${objectTarget}. `
      }, '').slice(0, -1)
    } else {
      return message + `${target}.`
    }
  }

  clearExecutionHistory() {
    this.executionHistory = []
  }
}

module.exports = Spell;
