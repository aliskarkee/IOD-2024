// // // a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// // const phoneBookDEF = new Map()
// // phoneBookDEF.set('Diana', '0451010028')
// // phoneBookDEF.set('Ellipsis', '123456')
// // phoneBookDEF.set('Fiana', '56789')
// // // Initialise the contents of phoneBookDEF by passing in an array of keys/values
// // // console.log(phoneBookDEF.size);
// // // console.log(phoneBookDEF);

// // // // Update the phone number for Caroline
// // // const phoneMap = Object.entries(phoneBookDEF);
// // // console.log(phoneMap) 
// // // console.log(phoneMap.get('Fiana'))
// // phone ="";
// // function printPhoneBook(contacts){
// //     contacts = phoneBookDEF
// //     phone = contacts

// // }
// // console.log(phone.size);
// // console.log(phone);
// const phoneBookABC = new Map();
// phoneBookABC.set('Annabelle', '0412312343');
// phoneBookABC.set('Barry', '0433221117');
// phoneBookABC.set('Caroline', '0455112233'); 

// const phoneBookDEF = new Map([
//     ['Daniel', '0455001234'],
//     ['Emily', '0466112345'],
//     ['Frank', '0477113456']
// ]);

// function printPhoneBook(contacts) {
//     contacts.forEach((phoneNumber, name) => {
//         console.log(`${name}: ${phoneNumber}`);
//     });
// }

// const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// function printAllNames(contacts) {
//     for (const name of contacts.keys()) {
//         console.log(name);
//     }
// }

// // Testing everything
// console.log("Phone Book ABC:");
// printPhoneBook(phoneBookABC);

// console.log("\nPhone Book DEF:");
// printPhoneBook(phoneBookDEF);

// console.log("\nCombined Phone Book:");
// printPhoneBook(phoneBook);

// console.log("\nNames in Combined Phone Book:");
// printAllNames(phoneBook);
// a) Create a new phoneBookDEF Map to store names beginning with D, E or F


const phoneBookDEF = new Map();

const entriesDEF = [
  ['David', '0466223344'],
  ['Eva', '0477334455'],
  ['Frank', '0488445566']
];
phoneBookDEF.set(entriesDEF[0][0], entriesDEF[0][1]);
phoneBookDEF.set(entriesDEF[1][0], entriesDEF[1][1]);
phoneBookDEF.set(entriesDEF[2][0], entriesDEF[2][1]);

const phoneBookABC = new Map();
phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');

phoneBookABC.set('Caroline', '0455229999'); 

function printPhoneBook(contacts) {
  for (const [name, phone] of contacts) {
    console.log(`${name}: ${phone}`);
  }
}

console.log('PhoneBookABC:');
printPhoneBook(phoneBookABC);

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

console.log('\nCombined PhoneBook:');
printPhoneBook(phoneBook);
