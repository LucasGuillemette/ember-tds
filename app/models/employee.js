import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class EmployeeModel extends Model {
  @attr('string') email;
  @attr('string') name;
  @attr('string') password;
}
