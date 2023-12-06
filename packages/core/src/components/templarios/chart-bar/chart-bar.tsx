import { Component, Host, Prop, h } from '@stencil/core';
import { createColorClasses } from '../../../utils/functions/color.function';
import type { TpColor } from '../../../utils/types/color.type';

@Component({
  tag: 'tp-chart-bar',
  styleUrl: 'chart-bar.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpChartBar {
  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
   * Define o valor do preenchimento do componente.
   */
  @Prop({ reflect: true }) value = 0;

  /**
   * Define a altura do componente.
   */
  @Prop({ reflect: true }) height = 50;

  /**
   * Define a largura do componente.
   */
  @Prop({ reflect: true }) width = 32;

  /**
   * Define se o componente irá apresentar rótulo ou não.
   */
  @Prop({ reflect: true }) noLabel = false;

  render() {
    const { color, value, height, width, noLabel } = this;

    const percentage = (height * Math.min(Math.max(0, value), 100)) / 100;

    return (
      <Host
        class={createColorClasses(color, {
          'tp-chart-bar': true,
        })}
        style={{
          '--value': `${percentage}`,
          '--height': `${height}`,
          '--width': `${width}`,
        }}
      >
        <div class="tp-chart-bar__container">
          {!noLabel && (
            <div class="tp-chart-bar__label">
              <slot></slot>
            </div>
          )}

          <div class="tp-chart-bar__progress"></div>
        </div>
      </Host>
    );
  }
}
