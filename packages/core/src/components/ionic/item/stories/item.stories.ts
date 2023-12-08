import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementItem } from '@ionic/core/components/ion-item';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_ITEM } from '../utils/item.constant';
import { TpIonItem } from '../utils/item.type';

defineCustomElementItem();
defineCustomElementLabel();

const meta: Meta<Components.IonItem & TpIonItem> = {
  title: 'components/Ionic/Item',
  argTypes: {
    lines: {
      control: { type: 'check' },
      options: [...TP_ION_ITEM.lines],
      description: 'Define uma borda no bottom do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM.lines.join('|'),
        },
      },
    },
    ['tp-gap']: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM['tp-gap']],
      description: 'Define o espaçamento entre os slots do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM['tp-gap'].join('|'),
        },
      },
    },
    ['tp-spacingx']: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM['tp-spacingx']],
      description: 'Define o padding horizontal do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM['tp-spacingx'].join('|'),
        },
      },
    },
    ['tp-spacingy']: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM['tp-spacingy']],
      description: 'Define o padding vertical do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM['tp-spacingy'].join('|'),
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
      tp-gap="${args['tp-gap']}"
      tp-spacingX="${args['tp-spacingx']}"
      tp-spacingY="${args['tp-spacingy']}"
      ?button="${args.button}"
      ?disabled="${args.disabled}"
    >
      <ion-label>Ion Item</ion-label>
    </ion-item>

    <ion-item
      color="${args.color}"
      lines="${args.lines}"
      tp-gap="${args['tp-gap']}"
      tp-spacingX="${args['tp-spacingx']}"
      tp-spacingY="${args['tp-spacingy']}"
      ?button="${args.button}"
      ?disabled="${args.disabled}"
    >
      <ion-icon slot="start" src="./icons/tp-star.svg"></ion-icon>
      <ion-label>Ion Item</ion-label>
    </ion-item>

    <ion-item
      color="${args.color}"
      lines="${args.lines}"
      tp-gap="${args['tp-gap']}"
      tp-spacingX="${args['tp-spacingx']}"
      tp-spacingY="${args['tp-spacingy']}"
      ?button="${args.button}"
      ?disabled="${args.disabled}"
    >
      <ion-label>Ion Item</ion-label>
      <ion-icon slot="end" src="./icons/tp-star.svg"></ion-icon>
    </ion-item>

    <ion-item
      color="${args.color}"
      lines="${args.lines}"
      tp-gap="${args['tp-gap']}"
      tp-spacingX="${args['tp-spacingx']}"
      tp-spacingY="${args['tp-spacingy']}"
      ?button="${args.button}"
      ?disabled="${args.disabled}"
    >
      <ion-icon slot="start" src="./icons/tp-star.svg"></ion-icon>
      <ion-label>Ion Item</ion-label>
      <ion-icon slot="end" src="./icons/tp-star.svg"></ion-icon>
    </ion-item>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-item/gi)).toBeTruthy();
  }, */
};
