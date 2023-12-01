import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-chip';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonChip } from './chip.type';
import { TP_ION_CHIP } from './chip.constants';

defineCustomElement();

const meta: Meta<Components.IonChip & TpIonChip> = {
  title: 'components/Ionic/Chip',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [...TP_ION_CHIP.size],
      description: 'Define o tamanho do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_CHIP.size.join('|'),
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
    active: {
      control: 'boolean',
      description: 'Define a estilização do estado ativo do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    slot: {
      control: { type: 'text' },
      table: {
        defaultValue: {
          summary: 'Chip',
        },
        type: {
          summary: 'string',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonChip & TpIonChip>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-chip
      outline
      size="${args.size}"
      color="${args.color}"
      ?disabled="${args.disabled}"
      ?active="${args.active}"
    >
      <ion-label>${args.slot ? args.slot : 'Chip'}</ion-label>
    </ion-chip>

    <ion-chip
      outline
      size="${args.size}"
      color="${args.color}"
      ?disabled="${args.disabled}"
      ?active="${args.active}"
    >
      <ion-icon tp-size="md" src="./icons/tp-star.svg"></ion-icon>
      <ion-label>${args.slot ? args.slot : 'Chip'}</ion-label>
    </ion-chip>

    <ion-chip
      outline
      size="${args.size}"
      color="${args.color}"
      ?disabled="${args.disabled}"
      ?active="${args.active}"
    >
      <ion-label>${args.slot ? args.slot : 'Chip'}</ion-label>
      <ion-icon tp-size="md" src="./icons/tp-star.svg"></ion-icon>
    </ion-chip>

    <ion-chip
      outline
      size="${args.size}"
      color="${args.color}"
      ?disabled="${args.disabled}"
      ?active="${args.active}"
    >
      <ion-icon tp-size="md" src="./icons/tp-star.svg"></ion-icon>
      <ion-label>${args.slot ? args.slot : 'Chip'}</ion-label>
      <ion-icon tp-size="md" src="./icons/tp-star.svg"></ion-icon>
    </ion-chip>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-text/gi)).toBeTruthy();
  }, */
};
