import faker from "faker";
import Cars from "../model/Cars.js";
const generateFakeCarsData = (limit) => {
  let cars = [];
  for (let i = 0; i < limit; i++) {
    let car = {};
    car.company = faker.vehicle.manufacturer();
    car.type = faker.vehicle.type();
    car.fuel = faker.vehicle.fuel();
    car.color = faker.vehicle.color();
    car.airbags = faker.datatype.boolean();
    car.price = faker.commerce.price();
    cars.push(car);
  }
  return cars;
};
const createFakeCarsData = async (limit) => {
  try {
    let cars = generateFakeCarsData(limit);
    let result = await Cars.insertMany(cars);
  } catch (error) {
    console.log(error.message);
  }
};
export default createFakeCarsData;
