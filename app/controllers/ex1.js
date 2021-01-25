import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = 'Default';
  @tracked info = 'a';
  MAX = 100;
  nbRestant = 100;

  get size() {
    return this.MAX - this.content.length;
  }
  get style() {
    if (this.MAX - this.content.length > 10) {
      return 'alert-info';
    }
    else if(this.MAX - this.content.length < 0){
      return 'alert-danger';
    }
    else{
      return 'alert-warning';
    }
  }

  @action
  clear() {
    this.content = '';
  }

  @action
  enre() {
    this.info = '';
  }

  @action
  save() {
    this.info = 'Note enregistrée';
  }

  @action
  update() {
    this.info = this.info + 'Note modifiée';
  }
}
