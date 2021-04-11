import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionAddProductRoute extends Route {
  model() {
    var retour = RSVP.hash({
      produit: {},
      sections: this.store.findAll('section'),
    });
    return retour;
  }

  @action addProduct(data) {
    let product = this.store.createRecord('Product', data);
    product.save().then(() => this.transitionTo('section'));
  }
}
