import type { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { TP_RATE_LIKE } from './rate-like.constant';

const meta: Meta = {
  component: 'TpRateLike',
  title: 'components/Templarios/Rate like',
  decorators: [withActions as any],
  parameters: {
    actions: {
      handles: ['tpChange'],
    },
  },
  argTypes: {
    status: {
      control: 'radio',
      options: [...TP_RATE_LIKE.status],
      description: 'Define o status do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: [...TP_RATE_LIKE.status].join('|'),
        },
      },
    },
    loading: {
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
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: ({ ...args }) => {
    return html`<tp-rate-like
      status=${args.status}
      ?loading="${args.loading}"
    ></tp-rate-like>`;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-rate-like/gi)).toBeTruthy();
  }, */
};
Default.argTypes = {
  color: { table: { disable: true } },
};