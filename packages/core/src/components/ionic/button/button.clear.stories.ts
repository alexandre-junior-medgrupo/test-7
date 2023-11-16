import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_BUTTON_CLEAR } from './button.constant';
import { TpIonButton } from './button.type';

defineCustomElement();

const meta: Meta<Components.IonButton & TpIonButton> = {
  component: 'ion-button',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [...TP_ION_BUTTON_CLEAR.size],
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonButton & TpIonButton>;

export const Clear: Story = {
  render: ({ ...args }) => html`
    <ion-button .color="${args.color}" size="${args.size}" fill="clear">
      ion-button
    </ion-button>

    <ion-button .color="${args.color}" size="${args.size}" fill="clear">
      <ion-icon slot="start" src="./icons/tp-chevron-left.svg"></ion-icon>
      ion-button
    </ion-button>

    <ion-button .color="${args.color}" size="${args.size}" fill="clear">
      <ion-icon slot="end" src="./icons/tp-chevron-left.svg"></ion-icon>
      ion-button
    </ion-button>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
  }, */
};
