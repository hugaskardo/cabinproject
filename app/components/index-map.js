import Ember from 'ember';
import GMap from 'ember-cli-g-maps/components/g-maps';

export default GMap.extend({

  lat: 25.309595,
  lng: -100.745011,
  zoom: 9,
  scrollwheel: false,

  markers: Ember.A([
    {
      lat: 25.309595,
      lng: -100.745011
    }
  ])
});
