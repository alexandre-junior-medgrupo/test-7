import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import { defineCustomElement as defineCustomElementSkeletonText } from '@ionic/core/components/ion-skeleton-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpChartBar } from '../chart-bar';

defineCustomElementLabel();
defineCustomElementSkeletonText();

const meta: Meta<TpChartBar> = {
  title: 'components/Templarios/Chart Bar',
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Define o valor da barra de progresso.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
      },
    },
    width: {
      control: { type: 'number', min: 1 },
      description: 'Define a largura do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
      },
    },
    height: {
      control: { type: 'number', min: 1 },
      description: 'Define a altura do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Define a estilização do estado loading do componente.',
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
  args: {
    value: 0,
    height: 50,
    width: 32,
  },
};

export default meta;

type Story = StoryObj<TpChartBar>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <tp-chart-bar
      color="${args.color}"
      value="${args.value}"
      width="${args.width}"
      height="${args.height}"
      no-label
      ?loading="${args.loading}"
    >
    </tp-chart-bar>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
