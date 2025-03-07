class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.mealCount = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    this.mealCount += 1
    if (this.mealCount >= 3) {
      this.hungry = false
    }
  }
}

module.exports = Dragon;
