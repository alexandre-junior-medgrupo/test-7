import { Component, Host, Prop, getAssetPath, h } from '@stencil/core';
// TODO: criar alias tsconfig

import { createColorClasses } from '../../../utils/functions/color.function';
import { TpColor } from '../../../utils/types/color.type';

@Component({
  tag: 'tp-test',
  styleUrl: 'test.scss',
  assetsDirs: ['assets'],
  scoped: true,
})
export class TpTest {
  @Prop({ reflect: true }) color?: TpColor;
  @Prop({ reflect: true }) icon? = getAssetPath(
    `../../../../icons/tp-calendar.svg`,
  );

  render() {
    const { color, icon } = this;

    return (
      <Host
        class={createColorClasses(color, {
          'tp-test': true,
        })}
      >
        <div class="tp-test__container">
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            voluptate.
          </span>
          <ion-button>ion button</ion-button>
          <ion-icon class="tp-test__icon" src={icon}></ion-icon>
        </div>
      </Host>
    );
  }
}
