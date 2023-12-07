import { defineCustomElement as defineCustomElementInput } from '@ionic/core/components/ion-input';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

defineCustomElementInput();
defineCustomElementLabel();

const meta: Meta = {
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

type Story = StoryObj;

export const Input: Story = {
  render: ({ ...args }) => html`
    <tp-input-container state="${args.state}">
      <ion-label slot="label" tp-type="p14">Lorem ipsum dolor sit.</ion-label>
      <ion-input
        type="email"
        mode="md"
        clear-input="true"
        placeholder="Digite um e-mail valido"
      ></ion-input>
      <ion-label slot="feedback-error" tp-type="p14"
        >Lorem ipsum dolor sit.</ion-label
      >
      <ion-label slot="feedback-success" tp-type="p14"
        >Lorem ipsum dolor sit.</ion-label
      >
    </tp-input-container>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
Input.argTypes = {
  color: { table: { disable: true } },
};

export const Select: Story = {
  render: ({ ...args }) => html`
    <tp-input-container state="${args.state}">
      <ion-label slot="label" tp-type="p14">Lorem ipsum dolor sit.</ion-label>
      <ion-input
        type="email"
        mode="md"
        clear-input="true"
        placeholder="Digite um e-mail valido"
      ></ion-input>
      <ion-label slot="feedback-error" tp-type="p14"
        >Lorem ipsum dolor sit.</ion-label
      >
      <ion-label slot="feedback-success" tp-type="p14"
        >Lorem ipsum dolor sit.</ion-label
      >
    </tp-input-container>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
Select.argTypes = {
  color: { table: { disable: true } },
};
