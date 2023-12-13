import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-input';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpInputContainer } from 'src/components/templarios/input-container/input-container';
import { TpIonInput } from '../utils/input.type';

defineCustomElement();

const meta: Meta<Components.IonInput & TpIonInput & TpInputContainer> = {
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
  },
};

export default meta;

type Story = StoryObj<Components.IonInput & TpIonInput & TpInputContainer>;

export const Default: Story = {
  render: ({ ...args }) => {
    return html`
    <tp-input-container color="${args.color}">
      <ion-label slot="label" tp-type="p14">Descrição Input</ion-label>
      <ion-input
        mode="md"
        placeholder="Digite aqui"
        ?disabled="${args.disabled}"
        ?clear-input="${args.clearInput}"
      ></ion-input>
    </tp-input-container>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-input/gi)).toBeTruthy();
  }, */
};
