function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i
    const fromRight = word[j]
    const fromLeft = word[i]
    return (fromRight === fromLeft) ? true : false
  }
}

/* 
  Add your pseudocode here


  terate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true


*/

/*
  Add written explanation of your solution here
  too lazy to write 
  f the first letter is the same as the last letter, and the second letter is the same as the second to last letter, and so on (until the middle of the word), the function should return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
