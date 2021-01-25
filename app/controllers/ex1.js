import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = '';
  @tracked info = '';
  MAX = 100;
  nbRestant = 100;

  get size() {
    return this.nbRestant;
  }
  get style() {
    return this.info;
  }

  @action
  clear() {
    this.content = '';
  }

  @action
  save() {
    this.save();
  }

  @action
  update() {
    this.update();
  }
}
