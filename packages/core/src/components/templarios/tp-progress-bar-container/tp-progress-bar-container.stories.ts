import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ionic/core/components/ion-progress-bar';
import { html } from 'lit';

defineCustomElement();

const meta: Meta = {
  title: 'components/Templarios/Tp Progress Bar Container',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: `Define a estilização do progresso do componente.`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: ({ ...args }) => {
    return html`<tp-progress-bar-container
      .color="${args.color}"
      value="${args.value / 100}"
    >
    </tp-progress-bar-container>`;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-progress-bar-container/gi)).toBeTruthy();
  }, */
};
