import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_BUTTON } from './button.constant';
import { TpIonButton } from './button.type';

defineCustomElement();

const meta: Meta<Components.IonBadge & TpIonButton> = {
  component: 'ion-button',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [...TP_ION_BUTTON.size],
    },
    fill: {
      control: { type: 'select' },
      options: [...TP_ION_BUTTON.fill],
    },
    iconOnly: {
      control: { type: 'select' },
      options: [...TP_ION_BUTTON.iconOnly],
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonBadge & TpIonButton>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-button .color="${args.color}" size="${args.size}" fill="${args.fill}">
      ion-button
    </ion-button>

    <ion-button .color="${args.color}" size="${args.size}" fill="${args.fill}">
      <ion-icon slot="start"></ion-icon>
      ion-button
    </ion-button>

    <ion-button .color="${args.color}" size="${args.size}" fill="${args.fill}">
      <ion-icon slot="end" src="tp-chevron-up.svg"></ion-icon>
      ion-button
    </ion-button>

    <ion-button
      .color="${args.color}"
      size="${args.size}"
      fill="${args.fill}"
      icon-only
    >
      <ion-icon slot="icon-only" src="tp-chevron-up.svg"></ion-icon>
    </ion-button>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
  }, */
};
