import { Component, Element, Host, Listen, Prop, State, getAssetPath, h } from '@stencil/core';
import { createColorClasses } from '../../../utils/functions/color.function';
import type { TpColor } from '../../../utils/types/color.type';

@Component({
  tag: 'tp-input-container',
  styleUrl: 'input-container.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpInputContainer {
  private alertTriangleIcon = getAssetPath('./assets/tp-alert-triangle.svg');
  private CheckIcon = getAssetPath('./assets/tp-check.svg');
  private selectIcon = getAssetPath('./assets/tp-chevron-down.svg');

  /**
   * Quando usado em conjunto com 'select', representa a largura do 'select' definida dinamicamente.
   */
  private hostWidth: number | undefined;

  /**
   * Ascrescimo ao hostWidth necessário para contabilizar as bordas.
   */
  readonly selectAndPopoverDiffWidth: number = 2;

  /**
   * Referência ao componente no DOM.
   */
  @Element() host!: HTMLElement;

  /**
   * Alvo do evento de click. Evita bugs nos casos em que há mais de um 'select na mesma página.
   */
  @State() clickTarget!: Node;

  /**
   * Monitoria se o 'select' foi clicado e está ativo. A propriedade é usada para aplicar estilização e evitar processamentos desnecessários em alguns métodos.
   */
  @State() selectWithPopoverClicked: boolean = false;

  /**
   * ???
   */
  @State() pointerOnSelect: boolean = false;

  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
    * Define a variação de estado do componente.
    */
  @Prop({ reflect: true }) state?: 'error' | 'success';

  /**
   * Define a estilização do estado disabled do componente.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * ???
   */
  @Prop({ reflect: true }) inverted = false;

  @Listen('click', { target: 'body' })
  setClickTarget(e: MouseEvent) {
    if (this.disabled) return;

    this.clickTarget = e.target as Node;
  }

  @Listen('click')
  catchSelectIconClick(e: MouseEvent) {
    const target = e.target as Node;
    const ionSelect = this.host.querySelector('ion-select') as HTMLIonSelectElement;

    const shouldOpenOverlay = this.host.contains(target) && ionSelect.hasAttribute('interface') && (target.nodeName === 'ION-ICON' || target.nodeName === 'TP-INPUT-CONTAINER');

    if (shouldOpenOverlay) {
      ionSelect.open(e);
    }
  }

  @Listen('resize', { target: 'window' })
  setPopoverWidthOnResize() {
    if (!this.selectWithPopoverClicked) return;

    const popoverElement = document.querySelector('.select-popover') as HTMLElement;

    popoverElement?.style.setProperty('--width', `${this.host.clientWidth + this.selectAndPopoverDiffWidth}px`);
  }

  @Listen('ionPopoverWillPresent', { target: 'body' })
  setPopoverCharacteristics() {
    if (!this.host.contains(this.clickTarget)) return;

    this.selectWithPopoverClicked = true;
    this.hostWidth = this.host.clientWidth + this.selectAndPopoverDiffWidth;

    const popoverElement = document.querySelector('.select-popover') as HTMLElement;
    popoverElement?.style.setProperty('--width', `${this.hostWidth}px`);

    if (popoverElement.classList.contains('popover-bottom')) {
      this.inverted = true;
    }

    const { top, bottom, left } = this.host.getBoundingClientRect();
    if (this.inverted) {
      popoverElement.classList.add('tp-popover--inverted');
      popoverElement?.style.setProperty('--left', `${left}px`);
      popoverElement?.style.setProperty('--bottom',`${window.innerHeight - top}px`);
    } else {
      popoverElement?.style.setProperty('--left', `${left + 1}px`);
      popoverElement?.style.setProperty('--top', `${bottom}px`);
    }
  }

  // fix para conflito com popover API do chrome: pode remover depois de migração pro ionic 7
  @Listen('ionPopoverDidPresent', { target: 'body' })
  fixPopover() {
    const popover = document.querySelector('ion-select-popover');

    if (popover?.hasAttribute('popover')) {
      popover.removeAttribute('popover');
    }
  }

  @Listen('ionPopoverWillDismiss', { target: 'body' })
  unsetClikedState() {
    this.selectWithPopoverClicked = false;
  }

  componentDidLoad() {
    const ionSelect = this.host.querySelector('ION-SELECT') as HTMLIonSelectElement;

    if (ionSelect) {
      // TODO rever nomeclatura
      this.pointerOnSelect = true;

      if (!ionSelect.hasAttribute('interface')) {
        ionSelect.interfaceOptions = { cssClass: 'tp-hide' };
      }
    }
  }


  render() {
    const { color, state, disabled, alertTriangleIcon, CheckIcon, pointerOnSelect, selectIcon, selectWithPopoverClicked } = this;
    let content;
    let selectIconContainer;

    const icon = state === 'error' ? alertTriangleIcon : CheckIcon;

    if (this.pointerOnSelect) {
      selectIconContainer = <div class="tp-input-container__select-container">
        <ion-icon
          class="tp-input-container__select-icon"
          src={selectIcon}
          aria-hidden="true"
        ></ion-icon>
      </div>
    }

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
        class={createColorClasses(color, {
          'tp-input-container': true,
          'tp-input-container--error': state === 'error',
          'tp-input-container--success': state === 'success',
          'tp-input-container--disabled': disabled,
          'tp-input-container--with-select': pointerOnSelect,
          'tp-input-container--select-popover-clicked': selectWithPopoverClicked,
        })}
      >
        <slot name="label"></slot>
        <div class="tp-input-container__wrapper">
          <slot></slot>
          {selectIconContainer}
          {content}
        </div>
        <slot name="feedback-success"></slot>
        <slot name="feedback-error"></slot>
      </Host>
    );
  }
}
