import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-label';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_TYPE } from '../../../utils/constants/type.constant';
import { TpIonLabel } from './label.type';

defineCustomElement();

const meta: Meta<Components.IonLabel & TpIonLabel> = {
  component: 'ion-label',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [...TP_TYPE],
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonLabel & TpIonLabel>;

export const Primary: Story = {
  render: ({ ...args }) =>
    html`<ion-label color="${args.color}" type="${args.type}">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
      voluptate.
    </ion-label>`,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-label/gi)).toBeTruthy();
  },
};
