import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementItem } from '@ionic/core/components/ion-item';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import { defineCustomElement as defineCustomElementRadio } from '@ionic/core/components/ion-radio';
import { defineCustomElement as defineCustomElementRadioGroup } from '@ionic/core/components/ion-radio-group';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_ITEM } from '../../utils/item.constant';
import { TpIonItem } from '../../utils/item.type';

defineCustomElementItem();
defineCustomElementLabel();
defineCustomElementRadio();
defineCustomElementRadioGroup();

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
    tpGap: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.tpGap],
      description:
        'Define qual o espaçamento entre o icone e o texto do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM.tpGap.join('|'),
        },
      },
    },
    tpSpacingX: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.tpSpacingX],
      description:
        'Define qual o espaçamento das bordas horizontais para o conteudo do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM.tpSpacingX.join('|'),
        },
      },
    },
    tpSpacingY: {
      control: { type: 'select' },
      options: [...TP_ION_ITEM.tpSpacingY],
      description:
        'Define qual o espaçamento das bordas verticais para o conteudo do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ITEM.tpSpacingY.join('|'),
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
    <ion-radio-group>
      <ion-item
        .color="${args.color}"
        lines="${args.lines}"
        tp-gap="${args.tpGap}"
        tp-spacingX="${args.tpSpacingX}"
        tp-spacingY="${args.tpSpacingY}"
        ?button="${args.button}"
        ?disabled="${args.disabled}"
      >
        <ion-radio slot="start" aria-label></ion-radio>
        <ion-label>Basic Item</ion-label>
      </ion-item>

      <ion-item
        .color="${args.color}"
        lines="${args.lines}"
        tp-gap="${args.tpGap}"
        tp-spacingX="${args.tpSpacingX}"
        tp-spacingY="${args.tpSpacingY}"
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
