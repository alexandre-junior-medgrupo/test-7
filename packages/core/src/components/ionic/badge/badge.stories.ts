import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-badge';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_BADGE } from './badge.constant';
import { TpIonBadge } from './badge.type';

defineCustomElement();

const meta: Meta<Components.IonBadge & TpIonBadge> = {
  component: 'ion-badge',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [...TP_ION_BADGE.size],
    },
    fill: {
      control: { type: 'select' },
      options: [...TP_ION_BADGE.fill],
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonBadge & TpIonBadge>;

export const Default: Story = {
  render: ({ ...args }) =>
    html`<ion-badge
      .color="${args.color}"
      tp-size="${args.size}"
      tp-fill="${args.fill}"
    >
      ion-badge
    </ion-badge>`,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
  }, */
};
