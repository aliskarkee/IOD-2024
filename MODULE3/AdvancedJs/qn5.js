let car = {
  make: "Porsche",
  model: '911',
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

car.description(); // Works
setTimeout(() => car.description(), 200); 
let newCar = { ...car, year: 2024 };
setTimeout(car.description.bind(car), 200); 
let anotherCar = { ...car, make: "Tesla" }; 
setTimeout(car.description.bind(car), 200); 
