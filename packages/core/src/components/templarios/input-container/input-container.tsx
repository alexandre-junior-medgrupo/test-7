import { createColorClasses } from '../../../utils/functions/color.function';
import { Component, Host, Prop, h } from '@stencil/core';
import { TpColor } from 'src/components';

@Component({
  tag: 'tp-input-container',
  styleUrl: 'input-container.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpInputContainer {
  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: TpColor;

  render() {
    const { color } = this;

    return (
      <Host
        class={createColorClasses(color, {
          'tp-input-container': true,
        })}
      >
        <slot name="label"></slot>
        <slot></slot>
      </Host>
    );
  }
}
