import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementButton, IonButton } from '@ionic/core/components/ion-button';
import { defineCustomElement as defineCustomElementModal } from '@ionic/core/components/ion-modal';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonDialog } from '../utils/dialog.type';

defineCustomElementModal();
defineCustomElementButton();

const meta: Meta<Components.IonModal & IonButton & TpIonDialog> = {
  title: 'components/Ionic/Dialog',
  argTypes: {},
};

export default meta;

type Story = StoryObj<Components.IonModal & IonButton & TpIonDialog>;

// const createModal = async () => {
//   modalController.create({
//     component: '',
//     cssClass: 'tp-dialog',
//   })
// };

export const Default: Story = {
  render: () => {
    return html`
      <ion-button id="open-modal">Abrir Dialog</ion-button>

      <ion-modal class="tp-dialog" trigger="open-modal">
        <ion-header class="tp-dialog__header">
          <ion-button fill="clear" size="sm">
            <ion-icon slot="icon-only" src="./icons/tp-x.svg"></ion-icon>
          </ion-button>
        </ion-header>

        <div class="tp-dialog__content">
          <ion-label tp-type="p16b">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti cumque adipisci, voluptatibus facilis odio tenetur. In deleniti aliquam, unde facilis reiciendis suscipit laudantium numquam!
          </ion-label>
        </div>

        <ion-footer class="tp-dialog__footer">
            <ion-button class="tp-dialog__button" fill="outline">
              Cancelar
            </ion-button>
            <ion-button class="tp-dialog__button">
              Salvar
            </ion-button>
          </ion-footer>
      </ion-modal>
    >`
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-modal/gi)).toBeTruthy();
  }, */
};
Default.argTypes = {
  'color': { table: { disable: true } },
};
