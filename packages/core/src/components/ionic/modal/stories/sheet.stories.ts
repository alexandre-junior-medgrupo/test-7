import { Components, modalController } from '@ionic/core';
import { IonButton, defineCustomElement as defineCustomElementButton } from '@ionic/core/components/ion-button';
import { defineCustomElement as defineCustomElementModal } from '@ionic/core/components/ion-modal';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { sheetEnterAnimationDesktop, sheetLeaveAnimationDesktop } from '../utils/modal.fuctions';

defineCustomElementModal();
defineCustomElementButton();

const meta: Meta<Components.IonModal & IonButton> = {
  title: 'components/Ionic/Modal/Sheet/Desktop',
  argTypes: {},
};

export default meta;

type Story = StoryObj<Components.IonModal & IonButton>;

const openSheet = async () => {
  const modal = await modalController.create({
    component: 'sheet-example',
    cssClass: 'tp-sheet',
    enterAnimation: sheetEnterAnimationDesktop,
    leaveAnimation: sheetLeaveAnimationDesktop
  });

  await modal.present();
}

export const Default: Story = {

  render: () => {
    return html`
      <ion-button id="open-modal" @click="${openSheet}">Abrir Sheet</ion-button>
    `
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-modal/gi)).toBeTruthy();
  }, */
};
Default.argTypes = {
  'color': { table: { disable: true } },
};
