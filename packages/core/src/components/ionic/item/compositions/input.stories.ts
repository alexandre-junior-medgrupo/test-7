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
      description: 'Define se o componente terá um border bottom.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM.lines.join('|'),
        },
      },
    },
    gap: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.gap],
      description:
        'Define qual o espaçamento entre o icone e o texto do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM.gap.join('|'),
        },
      },
    },
    spacingX: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.spacingX],
      description:
        'Define qual o espaçamento das bordas horizontais para o conteudo do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM.spacingX.join('|'),
        },
      },
    },
    spacingY: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.spacingY],
      description:
        'Define qual o espaçamento das bordas verticais para o conteudo do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM.spacingY.join('|'),
        },
      },
    },
    button: {
      control: 'boolean',
      description: 'Define a estilização do estado button do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Define a estilização do estado disabled do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
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
