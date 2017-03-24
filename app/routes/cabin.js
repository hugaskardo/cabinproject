import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('cabin', params.cabin_id);
  }
});
