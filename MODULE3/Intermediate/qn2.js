// // 2. Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (...) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.

// console.log(truncate('This text will be truncated if it is too long', 25))
// // This text will be truncat...

// str ="the most beautiful eyes i have ever seen ";
// max =  10; 

//CREATE A FUNCTION WITH STR AND MAX 
//node 

function turncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max) + '...';
    } else {
        return str;
    }
}
/* for b */
// function turncate(str, max) {
//     return str.length > max ? str.slice(0, max) + '...' : str;
// }


console.log(turncate('This text will be truncated if its too long', 25));
