// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

// // console.log(ucFirstLetters("los angeles") ) //Los Angeles

// function capitalize(sentence) {
//     // return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
// }

// const sentence = "easy capitalize first letter javascript";
// // console.log(capitalize(sentence)); 

// const split = sentence.split(' ');
// // return sentence.split(word[0].toUpperCase);
// // const 

// const string = ('my name is alish '){
// //   .split(' ') // split on white space, so you have an array of words
// //   .map(word => word[0].toUpperCase() + word.slice(1)) // map each word, capitalizing the first letter
// //   .join(' ') // join it all back together with a space

//   console.log(string.split(' '))
//   console.log(string.map(word => 
  
// }

function ucFirstLetters(str) {
  // str = 'los angeles city'
  let newString = "";
  let words = str.split(" "); // [ 'los', 'angeles', 'city' ]

  for (let word of words) {
    if (newString.length != 0) {
      newString += " "; // "Los " - adds a space after the first word
    }
    newString += word.charAt(0).toUpperCase() + word.substring(1); // los - L + os -> A + ngles -> C + ity
  }

  return newString;
}

console.log(ucFirstLetters("los angeles city"));