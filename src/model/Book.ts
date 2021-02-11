import Sellable from "./Sellable";

export default class Book implements Sellable {
  constructor(
    public name: string,
    public readonly price: number,
    public readonly discount: number
  ) {}

  priceWithDiscount(): number {
    return this.price * (1 - this.discount);
  }
}
