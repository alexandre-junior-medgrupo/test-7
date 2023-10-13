import { Component, Host, Prop, getAssetPath, h } from '@stencil/core';
// TODO: criar alias tsconfig
import { createColorClasses } from '../../../utils/functions/color.function';
import { TpColor } from '../../../utils/types/color.type';

@Component({
  tag: 'tp-test',
  styleUrl: 'test.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class TpTest {
  @Prop({ reflect: true }) color?: TpColor;
  @Prop({ reflect: true }) icon? = 'tp-calendar.svg';

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
          <ion-icon
            class="tp-test__icon"
            src={getAssetPath(`../../../../icons/${icon}`)}
          ></ion-icon>
        </div>
      </Host>
    );
  }
}
