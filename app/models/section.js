import Model, { attr, belongsTo } from '@ember-data/model';

export default class SectionModel extends Model {
  @attr('number') quantity;
  @belongsTo('product') product;
  @belongsTo('order') order;
}
