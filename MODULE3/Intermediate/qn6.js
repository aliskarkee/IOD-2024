function unique(duplicateArray) {
    return [...new Set(duplicateArray)];
}

const name = ['Alish', 'Karki', 'Manchester', 'United', 'Karki', 'United'];

console.log(unique(name)); 
