import Model, { attr, hasMany } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('date') dateCreation;
  @attr('string') status;
  @attr('number') amount;
  @attr('number') toPay;
  @attr('number') itemsNumber;
  @attr('number') missingNumber;
  @attr('number') employee;
  @attr('number') timeslot;
  @attr('number') user;
  @hasMany('orderdetail') orderdetails;
  get count() {
    return this.orderdetails.length;
  }
}
