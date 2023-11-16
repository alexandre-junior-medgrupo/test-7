import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_BUTTON_ICON } from './button.constant';
import { TpIonButton } from './button.type';

defineCustomElement();

const meta: Meta<Components.IonButton & TpIonButton> = {
  component: 'ion-button',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [...TP_ION_BUTTON_ICON.size],
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonButton & TpIonButton>;

export const IconOnly: Story = {
  render: ({ ...args }) => html`
    <ion-button fill="clear" size="${args.size}">
      <ion-icon
        .color="${args.color}"
        slot="icon-only"
        src="./icons/tp-alert-triangle.svg"
      ></ion-icon>
    </ion-button>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
  }, */
};
