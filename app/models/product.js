import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;
  @attr('string') price;
  @attr('string') section;
  @attr('string') promotion;

}
