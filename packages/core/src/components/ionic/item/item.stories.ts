import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-label';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

defineCustomElement();

const meta: Meta<Components.IonItem> = {
  component: 'ion-item',
};

export default meta;

type Story = StoryObj<Components.IonItem>;

export const Default: Story = {
  render: () => html`
    <ion-item>
      <ion-label>Basic Item</ion-label>
    </ion-item>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-item/gi)).toBeTruthy();
  }, */
};
