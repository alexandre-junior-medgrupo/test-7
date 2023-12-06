import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-skeleton-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

defineCustomElement();

const meta: Meta<Components.IonSkeletonText> = {
  title: 'components/Ionic/Skeleton Text',
  argTypes: {},
};

export default meta;

type Story = StoryObj<Components.IonSkeletonText>;

export const Default: Story = {
  render: () => html` <ion-skeleton-text animated></ion-skeleton-text> `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-skeleton-text/gi)).toBeTruthy();
  }, */
};
