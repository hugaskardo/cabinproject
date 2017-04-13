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

      // #1 dates are valid, start before end
      this.send('validateDate');

      // #2 dates aren't occupied

      // #3 save date in the server

    },

    validateDate() {

      let startDate = new Date(Ember.$('#calendarCheckIn').val());
      let endDate = new Date(Ember.$('#calendarCheckOut').val());

      if(startDate.getTime() < endDate.getTime()) {
        console.log('dates are valid');
      }
      else {
        console.log('dates are not valid');
      }
    }
  }
});
