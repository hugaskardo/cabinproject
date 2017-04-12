import Ember from 'ember';

export default Ember.Route.extend({

  startDate: null,
  endDate: null,

  model() {
    return this.store.findAll('booking');
  },

  actions: {
    reserve() {
      console.log('make a reservation');
      /* jQuery code
        here
      */
      console.log('this is the startDate ', this.get('startDate'));
      console.log('this is the endDate', this.get('endDate'));
    }
  }
});
