import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpHorizontalChartBar } from './horizontal-chart-bar';
import { TP_HORIZONTAL_CHART_BAR } from './horizontal-chart-bar.constant';

// antigo med-chart-bar-horizontal

const meta: Meta<TpHorizontalChartBar> = {
  title: 'components/Templarios/Horizontal-Chart-bar',
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 150, step: 1 },
      description: `Define o valor representado pelo componente. Representa uma porcentagem por padrão. Representa uma contagem se isCount tem valor true e maxCount recebe um valor.`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
      },
    },
    isCount: {
      control: 'boolean',
      description: 'Define se o componente representa uma contagem.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    maxCount: {
      control: { type: 'number', min: 1, max: 150 },
      description: `Define a contagem máxima se o componente representa uma contagem.`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
      },
    },
    size: {
      control: { type: 'select' },
      options: [...TP_HORIZONTAL_CHART_BAR['sizes']],
      description: 'Define o tamanho do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_HORIZONTAL_CHART_BAR['sizes'].join('|'),
        },
      },
    },
  },
  args: {
    value: 0,
    isCount: false,
    maxCount: 150,
  },
};

export default meta;

type Story = StoryObj<TpHorizontalChartBar>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <tp-horizontal-chart-bar
      value="${args.value}"
      ?is-count="${args.isCount}"
      size="${args.size}"
      color="${args.color}"
      max-count="${args.maxCount}"
    >
    </tp-horizontal-chart-bar>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
