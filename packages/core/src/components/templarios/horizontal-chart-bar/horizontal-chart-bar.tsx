import { Component, Host, Prop, h } from '@stencil/core';
import { createColorClasses } from '../../../utils/functions/color.function';
import type { TpColor } from '../../../utils/types/color.type';
import { TpHorizontalChartBarSize } from './horizontal-chart-bar.enum';

@Component({
  tag: 'tp-horizontal-chart-bar',
  styleUrl: 'horizontal-chart-bar.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpHorizontalChartBar {
  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
   * Define a variação de tamanho do componente.
   */
  @Prop({ reflect: true }) size?: TpHorizontalChartBarSize;

  /**
   * Define o valor representado pelo componente.
   */
  @Prop({ reflect: true }) value = 0;

  /**
   * Define o valor que value deve atingir para apresentar 100% de progresso.
   */
  @Prop({ reflect: true }) maxCount = 100;

  /**
   * Define se um slot será disponibilizado para receber um rótulo.
   */
  @Prop({ reflect: true }) noLabel = false;

  render() {
    const { color, size, value, maxCount, noLabel } = this;
    const percentage = Math.min(Math.max(0, (value / maxCount) * 100), 100);

    return (
      <Host
        class={createColorClasses(color, {
          'tp-horizontal-chart-bar': true,
          'tp-horizontal-chart-bar--spill': percentage >= 100,
          [`tp-horizontal-chart-bar--${size}`]: Boolean(size),
        })}
        style={{ '--tp-fill-percentage': `${percentage}%` }}
      >
        <div class="tp-horizontal-chart-bar__container">
          <div class="tp-horizontal-chart-bar__track">
            <div class="tp-horizontal-chart-bar__progress"></div>
          </div>

          {!noLabel && (
            <div class="tp-horizontal-chart-bar__label-container">
              <slot></slot>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
