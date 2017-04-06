import Ember from 'ember';

export default Ember.Component.extend({

  didRender() {
    $('#jquery-test').css('color', 'red');
  }
});
