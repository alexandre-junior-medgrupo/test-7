import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementItem } from '@ionic/core/components/ion-item';
import { defineCustomElement as defineCustomElementToggle } from '@ionic/core/components/ion-toggle';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_ITEM } from '../item.constant';
import { TpIonItem } from '../item.type';

defineCustomElementItem();
defineCustomElementToggle();

const meta: Meta<Components.IonItem & TpIonItem> = {
  title: 'components/Ionic/Item/Compositions',
  argTypes: {
    lines: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.lines],
    },
    gap: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.gap],
    },
    spacingX: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.spacingX],
    },
    spacingY: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.spacingY],
    },
    button: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonItem & TpIonItem>;

export const Toggle: Story = {
  render: ({ ...args }) => html`
    <ion-item
      .color="${args.color}"
      lines="${args.lines}"
      gap="${args.gap}"
      spacingX="${args.spacingX}"
      spacingY="${args.spacingY}"
      ?button="${args.button}"
      ?disabled="${args.disabled}"
    >
      <ion-toggle mode="ios" slot="start" aria-label></ion-toggle>
      <ion-label>Basic Item</ion-label>
    </ion-item>

    <ion-item
      .color="${args.color}"
      lines="${args.lines}"
      gap="${args.gap}"
      spacingX="${args.spacingX}"
      spacingY="${args.spacingY}"
      ?button="${args.button}"
      ?disabled="${args.disabled}"
    >
      <ion-label>Basic Item</ion-label>
      <ion-toggle slot="end" aria-label></ion-toggle>
    </ion-item>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-item/gi)).toBeTruthy();
  }, */
};
