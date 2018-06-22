import { CreateElement, FunctionalComponentOptions, RenderContext } from 'vue';


/**
 * This is an example of a functional component
 * These render faster than normal components and are recommended
 * for simple things that are driven only by their context (props, slots, attrs, etc.)
 */
export const SvgIcon: FunctionalComponentOptions = {
  functional: true,
  props: ['icon'],
  render(h: CreateElement, { props, data }: RenderContext) {
    let size = '20';

    if (data.attrs.tiny !== undefined) {
      size = '10';
    } else if (data.attrs.small !== undefined) {
      size = '12';
    } else if (data.attrs.large !== undefined) {
      size = '25';
    } else if (data.attrs.size) {
      size = data.attrs.size;
    }

    size += 'px';

    return h(
      'div',
      { class: 'svg-icon', style: { width: size, height: size } },
      [
        h('svg', { attrs: { xmlns: 'http://www.w3.org/2000/svg' } }, [
          h('use', { attrs: { 'xlink:href': '#svg-icon-' + props.icon } })
        ])
      ]
    );
  }
};

export default SvgIcon;
