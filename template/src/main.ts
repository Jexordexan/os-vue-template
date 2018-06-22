import './styles.less';
import './flexbox.less'

import App from 'App.vue';
import SvgIcon from 'components/SvgIcon';
import FocusDirective from 'directives/focus-directive';
import NudgeDirective from 'directives/nudge-directive';
import Vue from 'vue';

Vue.component('SvgIcon', <any>SvgIcon); // tslint:disable-line:no-any
Vue.directive('nudge', NudgeDirective);
Vue.directive('focus', FocusDirective);

const app = new Vue({
  el: '#app',
  render: h => h(App)
});

export default app;
