import AbstractrouteRoute from './abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BoardRoute extends AbstractrouteRoute {
  @service userAuth;

  model() {
    let user = this.userAuth.user;
    if (user) {
      var back = RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetails',
        }),
        employee: user,
      });
      return back;
    }
  }

  @action logout() {
    this.userAuth.logout();
    this.transitionTo('index');
  }
}
