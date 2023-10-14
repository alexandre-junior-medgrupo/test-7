import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ICONS_STORYBOOK } from '../../../utils/constants/icon.constant';

const meta: Meta = {
  component: 'tp-test',
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [...TP_ICONS_STORYBOOK],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: ({ ...args }) => {
    const iconUrl = args.icon ? `./icons/${args.icon}` : null;
    return html`<tp-test .color="${args.color}" .icon="${iconUrl}"></tp-test>`;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
