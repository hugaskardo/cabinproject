import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
  	rooms: DS.attr('number'),
  	bathrooms: DS.attr('number'),
  	beds: DS.attr('number'),
  	livingrooms: DS.attr('number'),
  	capacity: DS.attr('number')
});
