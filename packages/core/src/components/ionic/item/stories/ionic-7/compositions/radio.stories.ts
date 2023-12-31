import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementItem } from '@ionic/core/components/ion-item';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import { defineCustomElement as defineCustomElementRadio } from '@ionic/core/components/ion-radio';
import { defineCustomElement as defineCustomElementRadioGroup } from '@ionic/core/components/ion-radio-group';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_ITEM } from '../../../utils/item.constant';
import { TpIonItem } from '../../../utils/item.type';

defineCustomElementItem();
defineCustomElementLabel();
defineCustomElementRadio();
defineCustomElementRadioGroup();

const meta: Meta<Components.IonItem & TpIonItem> = {
  title: 'components/Ionic/Item/Ionic-7/Compositions',
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
    ['tp-gap']: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM['tp-gap']],
      description:
        'Define qual o espaçamento entre o icone e o texto do componente.',
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
      description:
        'Define qual o espaçamento das bordas horizontais para o conteudo do componente.',
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
      description:
        'Define qual o espaçamento das bordas verticais para o conteudo do componente.',
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

export const Radio: Story = {
  render: ({ ...args }) => html`
    <ion-list>
      <ion-radio-group>
        <ion-item
          .color="${args.color}"
          lines="${args.lines}"
          tp-gap="${args['tp-gap']}"
          tp-spacingX="${args['tp-spacingx']}"
          tp-spacingY="${args['tp-spacingy']}"
          ?button="${args.button}"
          ?disabled="${args.disabled}"
        >
        <ion-radio label-placement="start" justify="space-between">
        <ion-text>
          Lorem ipsum, dolor sit amet consectetur.
        </ion-text>
      </ion-radio>
        </ion-item>

        <ion-item
          .color="${args.color}"
          lines="${args.lines}"
          tp-gap="${args['tp-gap']}"
          tp-spacingX="${args['tp-spacingx']}"
          tp-spacingY="${args['tp-spacingy']}"
          ?button="${args.button}"
          ?disabled="${args.disabled}"
        >
          <ion-radio label-placement="end" justify="space-between">
            <ion-text>
              Lorem ipsum, dolor sit amet consectetur.
            </ion-text>
          </ion-radio>
        </ion-item>
      </ion-radio-group>
    </ion-list>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-item/gi)).toBeTruthy();
  }, */
};
