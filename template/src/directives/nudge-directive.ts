import { DirectiveOptions } from 'vue';

export const NudgeDirective: DirectiveOptions = {
  // When an absolute or fixed position element is inserted into the DOM...
  // move the element just enough so that it is visible and not going over the edge of the window
  inserted(el) {
    const winWidth = window.innerWidth;
    const rect = el.getBoundingClientRect();
    if (rect.right > winWidth) {
      el.style.left += winWidth - rect.right + 'px';
    }
  }
};

export default NudgeDirective;
