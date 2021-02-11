import Component from '@glimmer/component';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  @tracked elements = []; //une liste d'élément
  selected = []; //une liste d'élément selectionné
  id = 'id'; // varaible id

  constructor() {
    super(...arguments); //appel le constructeur pere
    this.elements = this.args.elements; //la liste d'elements est egal a la liste d'evenement passé en parametre du constructeur
    this.selected = this.args.selected; //la liste d'elements selectionné est egal a la liste d'evenement séléctionné passé en parametre du constructeur
    this.id = this.args.identifier || 'id'; //id est egal a la valeur d'id passé en parametre si id n'est pas déclaré alors il prend la valeur 'id'
  }

  @action
  change(event) {
    let select = event.target;
    var selectedIds = [...select.selectedOptions].map(option => option.value);
    if (this.args.onChange) {
      this.args.onChange(this.elements.filter(elm => selectedIds.filter(e => e == elm[this.id]).length > 0));
    }
  }
}
