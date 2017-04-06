import DS from 'ember-data';

export default DS.Model.extend({

  client: DS.attr(),
  checkIn: DS.attr(),
  checkOut: DS.attr(),
  days: DS.attr(),
  price: DS.attr()
});
