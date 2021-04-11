import Model, { attr, belongsTo } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;
  @attr('string') price;
  @belongsTo('section') section;
  @attr('string') promotion;

}
