const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');

// a) Total minutes that have passed today
const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + ' minutes have passed so far today');

// b) Total seconds that have passed today
const secondsPassed = minutesPassed * 60 + today.getSeconds();
console.log(secondsPassed + ' seconds have passed so far today');

// c) Calculate age in years, months, and days
function calculateAge(birthDate) {
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    return `I am ${years} years, ${months} months, and ${days} days old.`;
}

const myBirthDate = new Date('2001-10-10');  
console.log(calculateAge(myBirthDate));

// d) Function to calculate days between two dates
function daysInBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;  
    const diffInTime = Math.abs(date2 - date1); 
    return Math.floor(diffInTime / oneDay); 
}

const date1 = new Date('2023-01-01');
const date2 = new Date('2023-09-10');
console.log('Days between:', daysInBetween(date1, date2));
