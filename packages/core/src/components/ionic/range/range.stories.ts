import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-range';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_RANGE } from './range.constants';
import { TpIonRange } from './range.type';

defineCustomElement();

const meta: Meta<Components.IonRange & TpIonRange> = {
  title: 'components/Ionic/Range',
  argTypes: {
    secondary: {
      control: { type: 'select' },
      options: [...TP_ION_RANGE.secondary],
      description: 'Define a variação do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_RANGE.secondary.join('|'),
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonRange & TpIonRange>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-range
      color="${args.color}"
      ?secondary="${args.secondary}"
      aria-label="volume"
    ></ion-range>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-range/gi)).toBeTruthy();
  }, */
};
