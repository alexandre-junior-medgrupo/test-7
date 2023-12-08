import { createColorClasses } from '../../../utils/functions/color.function';
import { Component, Host, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'tp-input-container',
  styleUrl: 'input-container.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpInputContainer {
  private alertTriangleIcon = getAssetPath('./assets/tp-alert-triangle.svg');
  private CheckIcon = getAssetPath('./assets/tp-check.svg');

  /**
   * Define a variação de estado do componente.
   */
  @Prop({ reflect: true }) state?: 'error' | 'success';

  render() {
    const { state, alertTriangleIcon, CheckIcon } = this;
    let content;

    const icon = state === 'error' ? alertTriangleIcon : CheckIcon;

    if (state) {
      content = (
        <div class="tp-input-container__state-container">
          <ion-icon
            class="tp-input-container__icon"
            src={icon}
            aria-hidden="true"
          ></ion-icon>
        </div>
      );
    }

    return (
      <Host
        class={createColorClasses(null, {
          'tp-input-container': true,
          'tp-comparison-chart-bar--error': state === 'error',
          'tp-comparison-chart-bar--success': state === 'success',
        })}
      >
        <slot name="label"></slot>
        <div class="tp-input-container__wrapper">
          <slot></slot>
          {content}
        </div>
        <slot name="feedback-success"></slot>
        <slot name="feedback-error"></slot>
      </Host>
    );
  }
}
