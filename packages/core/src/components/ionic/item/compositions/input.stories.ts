import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementInput } from '@ionic/core/components/ion-input';
import { defineCustomElement as defineCustomElementSearchbar } from '@ionic/core/components/ion-searchbar';
import { defineCustomElement as defineCustomElementTextarea } from '@ionic/core/components/ion-textarea';
import { defineCustomElement as defineCustomElementItem } from '@ionic/core/components/ion-item';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_ITEM } from '../item.constant';
import { TpIonItem } from '../item.type';

defineCustomElementItem();
defineCustomElementInput();
defineCustomElementSearchbar();
defineCustomElementTextarea();

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

export const Input: Story = {
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
      <ion-input
        mode="md"
        placeholder="Digite aqui"
        clear-input="true"
      ></ion-input>
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
      <div class="tp-input-container">
        <ion-text tp-type="p14">Input</ion-text>
        <ion-input
          mode="md"
          placeholder="Digite aqui"
          clear-input="true"
        ></ion-input>
      </div>
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
      <div class="tp-input-container">
        <ion-text tp-type="p14">Searchbar</ion-text>
        <ion-searchbar
          mode="md"
          search-icon="./../../../../icons/tp-search.svg"
          clear-icon="./../../../../icons/tp-x.svg"
          placeholder="Lorem ipsum dolor"
        ></ion-searchbar>
      </div>
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
      <div class="tp-input-container">
        <ion-text tp-type="p14">Textarea</ion-text>
        <ion-textarea
          placeholder="Lorem ipsum, dolor sit amet consectetur."
          mode="md"
        ></ion-textarea>
      </div>
    </ion-item>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-item/gi)).toBeTruthy();
  }, */
};
