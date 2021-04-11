import Model, { attr, hasMany } from '@ember-data/model';

export default class SectionModel extends Model {
  @hasMany('product') products;
  @attr('string') name;
  @attr('string') description;
}
