import { Promo } from '../models/promo.models';

export class PromoDeliveryBuilder {
  private promo: Promo = new Promo();

  public buildDelivery(dia: string): Promo {
    switch (dia) {
      case 'lunes':
        this.promo.setPromo('no hay promo');
        break;
      case 'martes':
        this.promo.setPromo('2 x 1');
        break;
      case 'miercoles':
        this.promo.setPromo('2 x 1');
        break;
      case 'jueves':
        this.promo.setPromo('Delivery Gratis');
        break;
      case 'viernes':
        this.promo.setPromo('no hay promo');
        break;
    }
    return this.promo;
  }
}
