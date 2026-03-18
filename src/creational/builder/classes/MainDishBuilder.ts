import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { Beans, Beverage, Dessert, Meat, Rice } from "./foods";
import { MealBox } from "./meal-box";

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }
  makeMeal(): this {
    const rice = new Rice("Arroz", 5.0);
    const beans = new Beans("Feijao", 3.0);
    const meat = new Meat("Carne", 15.0);

    this._meal.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage("Cafe", 1.0);

    this._meal.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert("Sorvete", 5.0);

    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number{
    return this._meal.getPrice();
  }
}
