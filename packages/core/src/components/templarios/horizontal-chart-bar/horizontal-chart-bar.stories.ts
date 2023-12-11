import { defineCustomElement as defineCustomElementSkeletonText } from '@ionic/core/components/ion-skeleton-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpHorizontalChartBar } from './horizontal-chart-bar';
import { TP_HORIZONTAL_CHART_BAR } from './horizontal-chart-bar.constant';

// antigo med-chart-bar-horizontal
defineCustomElementSkeletonText();

const meta: Meta<TpHorizontalChartBar> = {
  title: 'components/Templarios/Horizontal-Chart-bar',
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 150, step: 1 },
      description: 'Define o valor representado pelo componente',
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
      description:
        'Define o valor que value deve atingir para apresentar 100% de progresso.',
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
    maxCount: 100,
  },
};

export default meta;

type Story = StoryObj<TpHorizontalChartBar>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <tp-horizontal-chart-bar
      value="${args.value}"
      .size="${args.size}"
      .color="${args.color}"
      max-count="${args.maxCount}"
      no-label
      ?loading="${args.loading}"
    >
    </tp-horizontal-chart-bar>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
