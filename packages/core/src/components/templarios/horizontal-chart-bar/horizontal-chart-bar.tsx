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
   * Representa uma porcentagem por padrão.
   * Representa uma contagem se isCount tem valor true e maxCount recebe um valor.
   */
  @Prop({ reflect: true }) value = 50;

  /**
   * Define se o componente representa uma contagem.
   */
  @Prop({ reflect: true }) isCount = false;

  /**
   * Define a contagem máxima, se o componente representa uma contagem.
   */
  @Prop({ reflect: true }) maxCount?: number;

  /**
   * Define se o valor representado será ou não renderizado.
   */
  @Prop({ reflect: true }) hideValue = false;

  private getPercentage() {
    const { value, isCount, maxCount } = this;

    if (isCount) {
      return Math.min(Math.max(0, (value / maxCount) * 100), 100);
    }

    return Math.min(Math.max(0, value), 100);
  }

  private getValueLabel() {
    const { value, isCount, maxCount } = this;

    return isCount ? (
      <ion-label class="tp-horizontal-chart-bar__value-label">
        <span class="tp-horizontal-chart-bar__current-value">{value}</span>
        <span>/{maxCount ?? 0}</span>
      </ion-label>
    ) : (
      <ion-label class="tp-horizontal-chart-bar__value-label">
        <span class="tp-horizontal-chart-bar__current-value">
          {Math.max(0, value)}%
        </span>
      </ion-label>
    );
  }

  render() {
    const { color, size, hideValue } = this;
    const percentage = this.getPercentage();
    const valueLabel = hideValue ? null : this.getValueLabel();

    return (
      <Host
        class={createColorClasses(color, {
          'tp-horizontal-chart-bar': true,
          'tp-horizontal-chart-bar--spill': percentage >= 100,
          [`tp-horizontal-chart-bar--${size}`]: Boolean(size),
        })}
        style={{ '--tp-fill-percentage': `${this.getPercentage()}%` }}
      >
        <div class="tp-horizontal-chart-bar__container">
          <div class="tp-horizontal-chart-bar__track">
            <div class="tp-horizontal-chart-bar__progress"></div>
          </div>

          {valueLabel}
        </div>
      </Host>
    );
  }
}
