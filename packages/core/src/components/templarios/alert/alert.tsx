import {
  Component,
  Host,
  Prop,
  h,
  getAssetPath,
} from '@stencil/core';
import { createColorClasses } from '../../../utils/functions/color.function';
import type { TpColor } from '../../../utils/types/color.type';
import { TpAlertType } from './alert.type';
import { TpAlertState } from './alert.enum';

@Component({
  tag: 'tp-alert',
  styleUrl: 'alert.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpAlert {
  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
   * Define a variação de estado do componente.
   */
  @Prop({ reflect: true }) state?: TpAlertType['state'];

  /**
   * Define a string a ser exibida no componente.
   */
  @Prop({ reflect: true }) message: string;

  /**
   * Define o icon a ser exibido no componente.
   */
  @Prop({ reflect: true }) icon: string;

  /**
   * Define o estado de carregamento do componente.
   */
  @Prop({ reflect: true, mutable: true }) loading?: boolean;

  render() {
    const { color, icon, loading, message, state } = this;

    let renderIcon;
    let renderMessage;
    let content;

    renderIcon = getAssetPath(`../../../../icons/${icon}.svg`);
    renderMessage = message;

    if (state === TpAlertState.OFFLINE) {
      renderIcon = getAssetPath(`../../../../icons/tp-wi-fi-off.svg`);
      renderMessage = 'Você está offline. Conecte-se para acessar o conteúdo.';
    } else if (state === TpAlertState.ATUALIZAR) {
      renderIcon = getAssetPath(`../../../../icons/tp-alert-triangle.svg`);
      renderMessage = 'Versão desatualizada';
    }

    if (loading) {
      content = <ion-skeleton-text
        class="tp-alert__skeleton"
        animated
      ></ion-skeleton-text>;
    } else {
      content = <div class="tp-alert__container">
        <ion-icon class="tp-alert__icon" tp-size="sm" src={renderIcon}></ion-icon>
        <ion-text class="tp-alert__text" tp-type="p12x">{renderMessage}</ion-text>
      </div>;
    }

    return <Host class={createColorClasses(color, {
      'tp-alert': true,
      'tp-alert--offline': state === TpAlertState.OFFLINE,
      'tp-alert--atualizar': state === TpAlertState.ATUALIZAR,
      'tp-alert--loading': loading,
    })}>
      {content}
    </Host>;
  }
}
