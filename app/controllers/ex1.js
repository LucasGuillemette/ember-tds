import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = 'Default';
  @tracked info = '';
  @tracked hide = 'none';
  MAX = 100;
  nbRestant = 100;




  get size() {
    return this.MAX - this.content.length;
  }
  get style() {
    if(this.MAX - this.content.length === 100){
      this.hide = 'none';
    }
    if (this.MAX - this.content.length >= 50) {
      return 'alert-info';
    }
    else if(this.MAX - this.content.length < 20){
      return 'alert-danger';
    }
    else if(this.MAX - this.content.length < 50){
      return 'alert-warning';
    }
  }

  @action
  clear() {
    this.content = '';
    this.hide = 'none';
  }

  @action
  enre() {
    this.info = '';
  }

  @action
  save() {
    this.hide = 'visible';
    this.info = 'Note enregistrée';
  }

  @action
  update() {
    this.hide = 'visible';
    this.info = 'Note modifiée';

  }


}
