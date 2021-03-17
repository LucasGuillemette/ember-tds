import Route from '@ember/routing/route';

export default class indexRoute extends Route {
model(){
    return {};
}

@action login(user) {
    this.store
        .query('employee', {
            filter: {
                email: user.email
            },
        })
        .then((employees) => {
            if (employees.length) {
                let connected = employees.firstObject;
                if (connected.password && connected.password === user.password) {
                    this.userAuth.login(connected);
                    this.transitionTo('board');
                }
            }
        });
}