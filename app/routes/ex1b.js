import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class Ex1bRoute extends Route {
  model(){
    return this.modelFor('ex1').items;
  }
}
