import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class indexRoute extends Route {

  model() {
    return {};
  }

  @service userAuth;

  @action login(model) {
    this.store
        .query('employee', {
          filter: {
            email: model.email
          },
        })
        .then((data) => {
          if (data.length) {
            let user = data.firstObject;
            if (user.password && user.password === model.password) {
              this.userAuth.login(user);
              this.transitionTo('board');
            }
          }
        });
  }
}
