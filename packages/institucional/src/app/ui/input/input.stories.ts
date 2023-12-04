import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { within } from '@storybook/test';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'InputComponent',
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    inputId: 'Name',
    type: 'text',
    label: 'Hello World',
    value: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome nx-angular-starter/gi)).toBeTruthy();
  },
};
