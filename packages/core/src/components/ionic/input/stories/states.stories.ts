import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-input';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonInput } from '../utils/input.type';

defineCustomElement();

const meta: Meta<Components.IonInput & TpIonInput & any> = {
  title: 'components/Ionic/Input',
  argTypes: {
    clearInput: {
      control: 'boolean',
      description:
        'Se **true**, uma tag **button** será renderizada e o input terá a ação de **limpeza** do texto.',
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
    state: {
      control: { type: 'select' },
      options: ['error', 'success'],
      description: 'Define o espaçamento entre os slots do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: ['error', '|', 'success'],
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonInput & TpIonInput & any>;

export const States: Story = {
  render: ({ ...args }) => {
    return html`
    <tp-input-container state="${args.state}">
      <ion-input
        mode="md"
        placeholder="Digite aqui"
        color="${args.color}"
        ?disabled="${args.disabled}"
        ?clear-input="${args.clearInput}"
      ></ion-input>
      <ion-label slot="feedback-error" tp-type="p14"
      >*Caracteres invalidos</ion-label
    >
    <ion-label slot="feedback-success" tp-type="p14"
      >*Caracteres validos</ion-label
    >
    </tp-input-container>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-input/gi)).toBeTruthy();
  }, */
};
