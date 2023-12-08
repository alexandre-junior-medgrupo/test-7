import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpHorizontalChartBar } from '../horizontal-chart-bar';
import { TP_HORIZONTAL_CHART_BAR } from '../horizontal-chart-bar.constant';

// antigo med-chart-bar-horizontal

const meta: Meta<TpHorizontalChartBar> = {
  title: 'components/Templarios/Horizontal-Chart-bar/Compositions',
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
    maxCount: 100,
  },
};

export default meta;

type Story = StoryObj<TpHorizontalChartBar>;

export const Label: Story = {
  render: ({ ...args }) => {
    const renderedValue = Math.round((args.value / args.maxCount) * 100);

    return html`
      <tp-horizontal-chart-bar
        value="${args.value}"
        .size="${args.size}"
        .color="${args.color}"
        max-count="${args.maxCount}"
      >
        <ion-label
          tp-type="${args.size ? 'p12b' : 'p10b'}"
          color="${args.color ? args.color : 'brand-4'}"
        >
          ${renderedValue}%
        </ion-label>
      </tp-horizontal-chart-bar>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
