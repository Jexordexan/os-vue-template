/**
 * A simple directive that focusses the element it is bound to when that element is rendered
 */
export default {
  inserted(el: HTMLElement) {
    el.focus();
  }
};
