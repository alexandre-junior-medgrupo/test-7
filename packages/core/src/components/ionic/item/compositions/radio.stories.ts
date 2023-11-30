import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementItem } from '@ionic/core/components/ion-item';
import { defineCustomElement as defineCustomElementRadio } from '@ionic/core/components/ion-radio';
import { defineCustomElement as defineCustomElementRadioGroup } from '@ionic/core/components/ion-radio-group';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_ITEM } from '../item.constant';
import { TpIonItem } from '../item.type';

defineCustomElementItem();
defineCustomElementRadio();
defineCustomElementRadioGroup();

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

export const Radio: Story = {
  render: ({ ...args }) => html`
    <ion-radio-group>
      <ion-item
        .color="${args.color}"
        lines="${args.lines}"
        gap="${args.gap}"
        spacingX="${args.spacingX}"
        spacingY="${args.spacingY}"
        ?button="${args.button}"
        ?disabled="${args.disabled}"
      >
        <ion-radio slot="start" aria-label></ion-radio>
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
        <ion-radio slot="end" aria-label></ion-radio>
      </ion-item>
    </ion-radio-group>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-item/gi)).toBeTruthy();
  }, */
};
