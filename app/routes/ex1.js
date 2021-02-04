import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class Ex1Route extends Route {
  //model Hook : definit les données
  model(){
    return { items: [] };
  }

  @action
  save(content,m) {
    //recupere le model de la route nom
    m.items=content.split('\n');
    this.transitionTo('ex1b');
  }
}
