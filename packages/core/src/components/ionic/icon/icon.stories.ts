import { Components } from '@ionic/core';
import { within } from '@storybook/testing-library';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_ICON } from './icon.constant';
import { TpIonIcon } from './icon.type';

const meta: Meta<Components.IonIcon & TpIonIcon> = {
  component: 'ion-icon',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [...TP_ION_ICON.size],
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonIcon & TpIonIcon>;

export const Primary: Story = {
  render: ({ ...args }) =>
    html`<ion-icon
      src="/icons/tp-calendar.svg"
      color="${args.color}"
      tp-size="${args.size}"
    ></ion-icon>`,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/ion-icon/gi)).toBeTruthy();
  },
};
