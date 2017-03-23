import DS from 'ember-data';

export default DS.Model.extend({
  rooms: DS.attr(),
  bathrooms: DS.attr(),
  beds: DS.attr(),
  livingrooms: DS.attr(),
  capacity: DS.attr()
});
