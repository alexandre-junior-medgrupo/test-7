import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-text';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_TYPE } from '../../../utils/constants/type.constant';
import { TpIonText } from './text.type';

defineCustomElement();

const meta: Meta<Components.IonText & TpIonText> = {
  component: 'ion-text',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [...TP_TYPE],
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonText & TpIonText>;

export const Primary: Story = {
  render: ({ ...args }) =>
    html`<ion-text color="${args.color}" type="${args.type}">
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
        voluptate.
      </h1>
    </ion-text>`,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-text/gi)).toBeTruthy();
  },
};
