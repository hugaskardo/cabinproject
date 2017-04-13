import Ember from 'ember';
import BootstrapDatePicker from 'ember-cli-bootstrap-datepicker/components/bootstrap-datepicker';

export default BootstrapDatePicker.extend({

  orientation: 'bottom',
  startDate: new Date(),
  datesDisabled: [
    '04/15/2017',
    '04/27/2017'
  ],

  click() {
    console.log(this.get('value'));
  }
});
