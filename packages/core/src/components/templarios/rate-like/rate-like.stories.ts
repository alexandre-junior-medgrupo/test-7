import type { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { TP_RATE_LIKE } from './rate-like.constant';

const meta: Meta = {
  component: 'TpRateLike',
  parameters: {
    actions: {
      handles: ['tpChange'],
    },
  },
  decorators: [withActions],
  title: 'components/Templarios/Rate like',
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
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: ({ ...args }) => {
    return html`<tp-rate-like status=${args.status}></tp-rate-like>`;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-rate-like/gi)).toBeTruthy();
  }, */
};
Default.argTypes = {
  color: { table: { disable: true } },
};
