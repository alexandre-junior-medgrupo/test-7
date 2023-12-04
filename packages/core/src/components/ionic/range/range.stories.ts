import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-range';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

defineCustomElement();

const meta: Meta<Components.IonRange> = {
  title: 'components/Ionic/Range',
  argTypes: {
    // secondary: {
    //   control: 'boolean',
    //   description: 'Define a estilização do estado secondary do componente.',
    //   table: {
    //     defaultValue: {
    //       summary: 'undefined',
    //     },
    //     type: {
    //       summary: 'boolean',
    //     },
    //   },
    // },
  },
};

export default meta;

type Story = StoryObj<Components.IonRange>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-range color="${args.color}" aria-label="volume"></ion-range>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-range/gi)).toBeTruthy();
  }, */
};
