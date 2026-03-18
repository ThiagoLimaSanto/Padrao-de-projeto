import { MainDishBuilder } from "./classes/MainDishBuilder";
import { VeganDishBuilder } from "./classes/Vegan-dish-builder";

const mainDishBuilder = new MainDishBuilder();

mainDishBuilder.makeMeal().makeBeverage().makeDessert();

console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

const veganDishBuilder = new VeganDishBuilder();

veganDishBuilder.makeMeal();

console.log(veganDishBuilder.getMeal());
console.log(veganDishBuilder.getPrice());
