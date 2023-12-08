import { defineCustomElement as defineCustomElementSkeletonText } from '@ionic/core/components/ion-skeleton-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpAlert } from '../../alert';

// antigo med-alert-fixed
defineCustomElementSkeletonText();

const meta: Meta<TpAlert> = {
  title: 'components/Templarios/Alert/Compositions',
  argTypes: {
    icon: {
      control: 'text',
      description: 'Define o icon a ser exibido no componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'text',
        },
      },
    },
    message: {
      control: 'text',
      description: 'Define a string a ser exibida no componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'text',
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
    icon: 'tp-activity',
    message: 'Essa é uma mensagem a ser apresentada.',
  },
};

export default meta;

type Story = StoryObj;

export const Custom: Story = {
  render: ({ ...args }) => {
    return html`<tp-alert
      color="${args.color}"
      icon="${args.icon}"
      message="${args.message}"
      ?loading="${args.loading}"
    ></tp-alert>`;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-alert/gi)).toBeTruthy();
  }, */
};
