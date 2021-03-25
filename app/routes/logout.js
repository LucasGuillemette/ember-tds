import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import AbstractrouteRoute from './abstractroute';

export default class LogoutRoute extends AbstractrouteRoute {
  @service userAuth;
  @action out() {
    this.userAuth.logout();
    this.transitionTo('board');
  }
}
