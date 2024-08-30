function printObjectProperties(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
};

const newYork = {
    name: 'New York',
    population: 8_336_817,
    state: 'New York',
    founded: '1 December 1624',
    timezone: 'America/New_York'
};

printObjectProperties(sydney);
printObjectProperties(newYork);
