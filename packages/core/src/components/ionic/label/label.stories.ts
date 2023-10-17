import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-label';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_TYPES } from '../../../utils/constants/type.constant';
import { TpIonLabel } from './label.type';

defineCustomElement();

const meta: Meta<Components.IonLabel & TpIonLabel> = {
  component: 'ion-label',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [...TP_TYPES],
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonLabel & TpIonLabel>;

export const Default: Story = {
  render: ({ ...args }) =>
    html`<ion-label .color="${args.color}" tp-type="${args.type}">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
      voluptate.
    </ion-label>`,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-label/gi)).toBeTruthy();
  }, */
};
