import Ember from 'ember';
import momentFormatHelper from '../moment-format';

export default function(globalOutputFormat = 'LLLL', globalAllowEmpty = false) {
  return function() {
    Ember.deprecate('ember-moment: `moment` helper has been renamed to `moment-format`');
    return momentFormatHelper(globalOutputFormat, globalAllowEmpty)(...arguments);
  };
}
