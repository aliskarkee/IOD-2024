let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };


let moreSports = [...teamSports];
moreSports.push('Basketball');
moreSports.unshift('Soccer');
console.log(teamSports); 

let dog2 = dog1;
dog2 = 'Max';
console.log(dog1); 


let cat2 = { ...cat1 };
cat2.name = 'Snowball';
console.log(cat1.name); 
