import Ember from 'ember';
import GMap from 'ember-cli-g-maps/components/g-maps';

export default GMap.extend({

  lat: 25.309595,
  lng: -100.745011,
  zoom: 9,

  circles: Ember.A([
    {
      lat: 25.309595,
      lng: -100.745011,
      radius: 5000,
      draggable: false,
      fillColor: '#ff0000  ',
      fillOpacity: 0.1,
      strokeColor: '#ff0000',
      strokeOpacity: 0.3
    }
  ])
});
