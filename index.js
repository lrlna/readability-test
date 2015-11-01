function FleschTest () {
  this.constant = 206.835;
  this.wordMultiplier = 1.015;
  this.syllableMultiplier = 84.6;
  this.specialChars = [',', '.', ';', '?', '!', '-', ':'];
}

// calculates the score for a given string;
FleschTest.prototype.calculate = function(string) {
  var words = this.getWords(string);
  var syllables = this.getSyllables(words);
  var sentences = this.getSentences(string);
  return this.constant - this.wordMultiplier * (words / sentences) - this.syllableMultiplier * (syllables / words);
}

// get words in an array; 
FleschTest.prototype.getWords = function(string) {
  var words = string.split(" ");
  var filteredWords = [];
  
  // remove special characters from words array;
  words.forEach(function (word) {
    this.specialChars.forEach(function (specialChar) {
      if( word != specialChar && word != " " ) {
        word = word.replace(specialChar);
        filteredWords.push(newWord)
      }
    });
  });
  return filteredWords;
}

// TODO: write algorithm to get syllables given words;
FleschTest.prototype.getSyllables = function(words) {
  
}

// TODO: recursively go through each of the ending characters before returning sentences in array;
// split string on ending characters: . , ? , ! ;
FleschTest.prototype.getSentences = function(string) {
  var endChars = [".", "?", "!"]
  var sentences = [];
  endChars.forEach(function(endChar) {
    sentences.push(string.split(endChar));
  });
  return sentences;
}

module.exports = FleschTest;
