import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cabins', { path: '/cabins' });
  this.route('cabin', { path: '/cabins/:cabin_id' });
  this.route('reservations');
});

export default Router;
