import { Pizza } from '../models/pizza.model';
import { PizzaBuilder } from './pizza-builder';
import { PromoDeliveryBuilder } from './promo-delivery-builder';

export class PizzaStrogonoffBuilder extends PizzaBuilder {
  constructor() {
    super();
    this.pizza = new Pizza();
  }

  public buildNombre(): void {
    this.pizza.setNombre('strogonoff');
  }
  public buildMasa(): void {
    this.pizza.setMasa('suave');
  }
  public buildSalsa(): void {
    this.pizza.setSalsa('tomate');
  }
  public buildRelleno(): void {
    this.pizza.setRelleno('champiñones + carne + Orégano');
  }
  public buildQueso(): void {
    this.pizza.setQueso('mozzarella rallado');
  }
  public buildPromo(dia: string): void {
    const promo: PromoDeliveryBuilder = new PromoDeliveryBuilder();
    const delivery = promo.buildDelivery(dia);
    this.pizza.setPromo(delivery);
  }
}
