import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { Beans, Rice } from "./foods";
import { MealBox } from "./meal-box";

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }
  makeMeal(): this {
    const rice = new Rice("Arroz", 5.0);
    const beans = new Beans("Feijao", 3.0);

    this._meal.add(rice, beans);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
