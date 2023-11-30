import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-item';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_ITEM } from './item.constant';
import { TpIonItem } from './item.type';

defineCustomElement();

const meta: Meta<Components.IonItem & TpIonItem> = {
  title: 'components/Ionic/Item',
  argTypes: {
    lines: {
      control: { type: 'check' },
      options: [...TP_ION_ITEM.lines],
      description: 'Define o espaçamento entre os slots do componente.',
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
      description: 'Define o espaçamento entre os slots do componente.',
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
      description: 'Define o padding horizontal do componente.',
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
      description: 'Define o padding vertical do componente.',
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
      description:
        'Se **true**, uma tag **button** será renderizada e o item terá a ação de **touch** ou **click**.',
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

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-item
      color="${args.color}"
      lines="${args.lines}"
      gap="${args.gap}"
      spacingX="${args.spacingX}"
      spacingY="${args.spacingY}"
      ?button="${args.button}"
      ?disabled="${args.disabled}"
    >
      <ion-label>Basic Item</ion-label>
    </ion-item>

    <ion-item
      color="${args.color}"
      lines="${args.lines}"
      gap="${args.gap}"
      spacingX="${args.spacingX}"
      spacingY="${args.spacingY}"
      ?button="${args.button}"
      ?disabled="${args.disabled}"
    >
      <ion-icon slot="start" src="./icons/tp-star.svg"></ion-icon>
      <ion-label>Basic Item</ion-label>
    </ion-item>

    <ion-item
      color="${args.color}"
      lines="${args.lines}"
      gap="${args.gap}"
      spacingX="${args.spacingX}"
      spacingY="${args.spacingY}"
      ?button="${args.button}"
      ?disabled="${args.disabled}"
    >
      <ion-label>Basic Item</ion-label>
      <ion-icon slot="end" src="./icons/tp-star.svg"></ion-icon>
    </ion-item>

    <ion-item
      color="${args.color}"
      lines="${args.lines}"
      gap="${args.gap}"
      spacingX="${args.spacingX}"
      spacingY="${args.spacingY}"
      ?button="${args.button}"
      ?disabled="${args.disabled}"
    >
      <ion-icon slot="start" src="./icons/tp-star.svg"></ion-icon>
      <ion-label>Basic Item</ion-label>
      <ion-icon slot="end" src="./icons/tp-star.svg"></ion-icon>
    </ion-item>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-item/gi)).toBeTruthy();
  }, */
};
