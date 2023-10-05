import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import {
  TP_COLOR_BRAND,
  TP_COLOR_FEEDBACK,
  TP_COLOR_NEUTRAL,
} from '../../../utils/constants/color.constants';

defineCustomElement();

const meta: Meta<Components.IonButton> = {
  component: 'ion-button',
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [...TP_COLOR_NEUTRAL, ...TP_COLOR_FEEDBACK, ...TP_COLOR_BRAND],
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonButton>;

export const Primary: Story = {
  render: ({ ...args }) =>
    html`<ion-button color="${args.color}">ion-button</ion-button>`,
};
