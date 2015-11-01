function FleschTest () {
  this.constant = 206.835;
  this.wordMultiplier = 1.015;
  this.syllableMultiplier = 84.6;
  this.specialChars = [',', '.', ';', '?', '!', '-', ':'];
}

// calculates the score for a given string;
FleschTest.prototype.calculate = function(string) {
  var words = this.getWords(string);
  var syllables = this.getSyllables(string);
  var sentences = this.getSentences(string);
  return this.constant - this.wordMultiplier*(words / sentences) - this.syllableMultiplier * (syllables / words);
}

// get words in an array; 
FleschTest.prototype.getWords = function(string) {
  var words = [];

}

module.exports = FleschTest;
