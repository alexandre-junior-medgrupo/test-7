import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-badge';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

defineCustomElement();

const meta: Meta<Components.IonBadge> = {
  title: 'components/Ionic/Badge',
  argTypes: {

  },
};

export default meta;

type Story = StoryObj<Components.IonBadge>;

export const Default: Story = {
  render: ({ ...args }) =>
    html`
    >`,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
  }, */
};
