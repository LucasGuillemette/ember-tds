import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexoRoute extends Route {
  @service userAuth;

  @action connexion(email, password) {
    this.store
      .query('employee', {
        filter: {
          email: email,
        },
      })
      .then((users) => {
        if (users.length) {
          let user = users.firstObject;
          if (password == user.password) {
            this.userAuth.login(user);
            this.transitionTo('board');
          }
        }
      });
  }
}
