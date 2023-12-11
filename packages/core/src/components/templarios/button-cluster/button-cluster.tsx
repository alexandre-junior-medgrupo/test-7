import {
  Component,
  Host,
  Method,
  Prop,
  getAssetPath,
  h,
} from '@stencil/core';
import { createColorClasses } from '../../../utils/functions/color.function';
import type { TpColor } from '../../../utils/types/color.type';
import { TpButtonClusterType } from './utils/button-cluster.type';
import { TpButtonClusterState } from './utils/button-cluster.enum';

@Component({
  tag: 'tp-button-cluster',
  styleUrl: 'button-cluster.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpButtonCluster {
  private arrowIcon = getAssetPath('./assets/tp-chevron-down.svg');

  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
   * Define a variação de estado do componente.
   */
  @Prop({ reflect: true, mutable: true }) state?: TpButtonClusterType['state'];

  /**
   * Define o estado de carregamento do componente.
   */
  @Prop({ reflect: true, mutable: true }) loading?: boolean;

  @Method()
  async toggle(event?: Event) {
    event?.stopPropagation();
    // this.collapsed = !this.collapsed;
    this.state = this.state === TpButtonClusterState.EXPANDED ? TpButtonClusterState.COLLAPSED : TpButtonClusterState.EXPANDED;
  }

  render() {
    const { arrowIcon, color, loading, state } = this;

    let content;

    if (loading) {
      content = <h1>loading</h1>;
    } else {
      content = <div class="tp-button-cluster__container"
        onClick={(event: any) => { this.toggle(event) }}>
        <slot name="expand-text"></slot>
        <ion-icon
          class="tp-button-cluster__icon"
          src={arrowIcon}
          aria-hidden="true"
        ></ion-icon>
        <slot name="collapse-text"></slot>
      </div>;
    }

    return <Host class={createColorClasses(color, {
      'tp-button-cluster': true,
      'tp-comparison-chart-bar--expanded': state === TpButtonClusterState.EXPANDED,
      'tp-comparison-chart-bar--collapsed': state === TpButtonClusterState.COLLAPSED,
    })}>
      {content}
    </Host>;
  }
}
