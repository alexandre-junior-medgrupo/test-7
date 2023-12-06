import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpComparisonChartBar } from './comparison-chart-bar';

// antigo tp-chart-bar

const meta: Meta<TpComparisonChartBar> = {
  title: 'components/Templarios/Comparison-Chart-bar',
  argTypes: {
    containerHeight: {
      control: { type: 'number', min: 1 },
      description: `Define a altura máxima da coluna.`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
      },
    },
    barValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: `Define o preenchimento da coluna em porcentagem.`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
      },
    },
    hasMarker: {
      control: 'boolean',
      description: 'Define se o componente terá um marcador.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    markerValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: `Define a posição, em porcentagem, do marcador na coluna.`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
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
  args: {
    containerHeight: 200,
    barValue: 0,
    hasMarker: false,
    markerValue: 0,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<TpComparisonChartBar>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <tp-comparison-chart-bar
      color="${args.color}"
      container-height="${args.containerHeight}"
      bar-value="${args.barValue}"
      ?has-marker="${args.hasMarker}"
      marker-value="${args.markerValue}"
      ?disabled="${args.disabled}"
      no-label
    >
    </tp-comparison-chart-bar>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
