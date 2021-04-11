import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionEditRoute extends Route {
  @action editSection() {
    alert('editSection');
  }
}
