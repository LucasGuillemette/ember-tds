import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params/*, hash*/) {
  const [items, value,prop] = params; // 3 parametrees , une liste d'evenement, une valeur et
  let id=prop ||'id' // par defaut id si prop non déclarré
  return items.filterBy(id,value).length > 0; //permet de voir si un element est selectionné ou non dans la liste
});
