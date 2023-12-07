import { defineCustomElement as defineCustomElementInput } from '@ionic/core/components/ion-input';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpInputContainer } from '../input-container';

defineCustomElementInput();
defineCustomElementLabel();

const meta: Meta<TpInputContainer> = {
  title: 'components/Templarios/Input Container',
  argTypes: {
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

type Story = StoryObj<TpInputContainer>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <tp-input-container state="${args.state}">
      <ion-label slot="label" tp-type="p14">Description</ion-label>
      <ion-input
        type="email"
        error-text="*Caracteres invalidos"
        mode="md"
        clear-input="true"
        placeholder="Digite um e-mail valido"
        color="${args.color}"
      ></ion-input>
    </tp-input-container>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
