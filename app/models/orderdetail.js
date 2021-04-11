import Model, { attr, belongsTo, asMany } from '@ember-data/model';

export default class OrderdetailModel extends Model {
  @belongsTo('product') product;
  @belongsTo('order') order;
  @attr('number') quantity;
}
