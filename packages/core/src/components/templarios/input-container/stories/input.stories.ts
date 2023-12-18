
import { defineCustomElement as defineCustomElementInput } from '@ionic/core/components/ion-input';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_INPUT_CONTAINER } from '../utils/input-container.constants';

defineCustomElementInput();
defineCustomElementLabel();

const meta: Meta = {
  title: 'components/Templarios/Input Container',
  argTypes: {
    state: {
      control: { type: 'select' },
      options: [...TP_INPUT_CONTAINER.state],
      description: 'Define o estado do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_INPUT_CONTAINER.state.join('|'),
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Input: Story = {
  render: ({ ...args }) => html`
    <tp-input-container color="${args.color}" state="${args.state}">
      <ion-label slot="label" tp-type="p14">Descrição Input</ion-label>
      <ion-input
        type="email"
        mode="md"
        clear-input="true"
        placeholder="Digite um e-mail valido"
      ></ion-input>
      <ion-label slot="feedback-error" tp-type="p14">
        *Caracteres invalidos.
      </ion-label>
      <ion-label slot="feedback-success" tp-type="p14">
        *Caracteres validos
      </ion-label>
    </tp-input-container>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
