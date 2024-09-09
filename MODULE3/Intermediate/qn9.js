let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};

function sumSalariesAndTopEarner(salaries) {
    let total = 0;
    let highestSalary = 0;
    let topPerson = "";

    for (let person in salaries) {
        total += salaries[person];
        if (salaries[person] > highestSalary) {
            highestSalary = salaries[person];
            topPerson = person;
        }
    }

    return {
        totalSalaries: total,
        topEarner: topPerson
    };
}

let result = sumSalariesAndTopEarner(salaries);
console.log("Total Salaries:", result.totalSalaries); 
console.log("Top Earner:", result.topEarner);        