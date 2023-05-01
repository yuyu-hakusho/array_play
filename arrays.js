/*
Given an array containing the english alphabet, write code that returns an array containing only the vowels (including "y").

Note:

* "a" is the first letter
* "e" is the fifth letter
* "i" is the ninth letter
* "o" is the 12th to last letter
* "u" is the 6th to last letter
* "y" is the second to last letter

*/

function getVowels(){
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let vowels = [alphabet[0], alphabet[4], alphabet[8], alphabet[14], alphabet[20], alphabet[24]]
  
  
    return vowels
  }
  
  module.exports = getVowels
  


  /*
Given an array containing the english alphabet, write code that returns an array containing:

* The numbers 0-9 at the beginning of the alphabet (as numbers, not strings)
* An ampersand (&) at the end of the alphabet

*/

function getAlphaNumericAlphabet(){
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let alphaNumericAlphabet = alphabet
    alphaNumericAlphabet.unshift(0,1,2,3,4,5,6,7,8,9);
    alphaNumericAlphabet.push("&");
  
    return alphaNumericAlphabet
  }
  
  module.exports = getAlphaNumericAlphabet

  /*
Given an array containing the alphanumeric alphabet, write code that returns an array that:

* Removes the numbers 0-9 from the beginning of the alphabet
* Removes the ampersand (&) from the end of the alphabet
* Adds a "ch" between "c" and "d"
* Adds an "ñ" between "n" and "o"
* Adds an "ll" between "l" and "m"

*/

function getSpanishAlphabet(){
    const alphaNumericAlphabet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "&"]
    let spanishAlphabet = alphaNumericAlphabet.slice(10,36);
    spanishAlphabet.splice((spanishAlphabet.indexOf("d")),0,"ch");
    spanishAlphabet.splice((spanishAlphabet.indexOf("o")),0,"ñ");
    spanishAlphabet.splice((spanishAlphabet.indexOf("m")),0,"ll");
  
    return spanishAlphabet
  }
  
  module.exports = getSpanishAlphabet

  