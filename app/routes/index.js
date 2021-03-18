import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class indexRoute extends Route {
  model() {
    return {};
  }

  @service userAuth;

  @action login(employee) {
    this.store
        .query('employee', {
          filter: {
            email: employee.email
          },
        })
        .then((employees) => {
          if (employees.length) {
            let connected = employees.firstObject;
            if (connected.password && connected.password === employee.password) {
              this.userAuth.login(connected);
              this.transitionTo('board');
            }
          }
        });
  }
}
