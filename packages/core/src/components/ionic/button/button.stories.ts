import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-button';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

defineCustomElement();

const meta: Meta<Components.IonButton> = {
  component: 'ion-button',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<Components.IonButton>;

export const Primary: Story = {
  render: ({ ...args }) =>
    html`<ion-button color="${args.color}">ion-button</ion-button>`,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-text/gi)).toBeTruthy();
  },
};
