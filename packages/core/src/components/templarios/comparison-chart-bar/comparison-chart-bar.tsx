import { Component, Host, Prop, h } from '@stencil/core';
import { createColorClasses } from '@utils/functions/color.function';
import type { TpColor } from '@utils/types/color.type';

@Component({
  tag: 'tp-comparison-chart-bar',
  styleUrl: 'comparison-chart-bar.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpComparisonChartBar {
  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
   * Define a altura máxima da coluna.
   */
  @Prop({ reflect: true }) containerHeight = 200;

  /**
   * Define o preenchimento da coluna em porcentagem.
   */
  @Prop({ reflect: true }) barValue = 0;

  /**
   * Define se o componente terá um marcador.
   */
  @Prop({ reflect: true }) hasMarker = false;

  /**
   * Define a posição, em porcentagem, do marcador na coluna.
   */
  @Prop({ reflect: true }) markerValue = 0;

  /**
   * Define a estilização do estado disabled do componente.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Define se o componente não terá rótulo.
   */
  @Prop({ reflect: true }) noLabel = false;

  render() {
    const {
      color,
      containerHeight,
      barValue,
      hasMarker,
      markerValue,
      noLabel,
      disabled,
    } = this;

    return (
      <Host
        class={createColorClasses(color, {
          'tp-comparison-chart-bar': true,
          'tp-comparison-chart-bar--disabled': disabled,
          'tp-comparison-chart-bar--has-marker': hasMarker,
        })}
        style={{
          '--tp-container-height': `${containerHeight}px`,
          '--tp-bar-value': `${barValue}%`,
          '--tp-marker-value': `${markerValue}%`,
        }}
      >
        <div class="tp-comparison-chart-bar__container">
          <div class="tp-comparison-chart-bar__bar"></div>
          {hasMarker && <div class="tp-comparison-chart-bar__marker"></div>}
        </div>

        {!noLabel && (
          <div class="tp-comparison-chart-bar__label">
            <slot></slot>
          </div>
        )}
      </Host>
    );
  }
}
