class Vampire{
constructor(name, pet) {
    this.name = name
    this.pet = pet || 'bat'
    this.thirsty = true 
    this.ouncesDrank = 0
}
drink() {
    this.thirsty = this.thirsty === true ? false : true
    this.ouncesDrank += 10
} 
}




module.exports = Vampire