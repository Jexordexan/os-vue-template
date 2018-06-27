import 'styles.less';

import App from 'App.vue';
import SvgIcon from 'components/SvgIcon';
import FocusDirective from 'directives/focus-directive';
import Vue from 'vue';
import VueRx from 'vue-rx';   // tslint:disable-line

import { Observable, Subject, Subscription } from 'rxjs';

Vue.use(VueRx, {
  Observable,
  Subject,
  Subscription
});

Vue.component('SvgIcon', <any>SvgIcon); // tslint:disable-line:no-any
Vue.directive('focus', FocusDirective);

const app = new Vue({
  el: '#app',
  render: h => h(App)
});

export default app;
