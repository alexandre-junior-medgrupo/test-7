import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpChartBar } from './chart-bar';

// antigo med-chart-bar

const meta: Meta<TpChartBar> = {
  title: 'components/Templarios/Chart-bar',
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: `Define o valor do preenchimento do componente.`,
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
      description: `Define a largura do componente.`,
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
      description: `Define a altura do componente.`,
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
    <div style="display: flex; align-items: flex-end; gap: 40px">
      <tp-chart-bar
        color="${args.color}"
        value="${args.value}"
        width="${args.width}"
        height="${args.height}"
      >
        <ion-label tp-type="p12b"> ${args.value}% </ion-label>
      </tp-chart-bar>

      <tp-chart-bar
        color="${args.color}"
        value="${args.value}"
        width="${args.width}"
        height="${args.height}"
        no-label
      >
      </tp-chart-bar>
    </div>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
