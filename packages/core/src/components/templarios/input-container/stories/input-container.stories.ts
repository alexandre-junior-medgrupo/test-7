import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpInputContainer } from '../input-container';

// antigo med-chart-bar

const meta: Meta<TpInputContainer> = {
  title: 'components/Templarios/Input Container',
};

export default meta;

type Story = StoryObj<TpInputContainer>;

export const Default: Story = {
  render: () => html` <tp-input-container> </tp-input-container> `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
