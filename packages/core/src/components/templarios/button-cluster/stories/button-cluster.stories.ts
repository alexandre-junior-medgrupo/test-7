// import { defineCustomElement as defineCustomElementSkeletonText } from '@ionic/core/components/ion-skeleton-text';
import { defineCustomElement as defineCustomElementText } from '@ionic/core/components/ion-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpButtonCluster } from '../button-cluster';
import { TP_BUTTON_CLUSTER } from '../utils/button-cluster.constants';
import { TpButtonClusterState } from '../utils/button-cluster.enum';

// defineCustomElementSkeletonText();
defineCustomElementText();

const meta: Meta<TpButtonCluster> = {
  title: 'components/Templarios/Button cluster',
  argTypes: {
    state: {
      control: { type: 'select' },
      options: [...TP_BUTTON_CLUSTER.state],
      description: 'Define o estado do componente.',
      table: {
        defaultValue: {
          summary: TpButtonClusterState.COLLAPSED,
        },
        type: {
          summary: [...TP_BUTTON_CLUSTER.state].join('|'),
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
    state: TpButtonClusterState.COLLAPSED,
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: ({ ...args }) => {
    return html`<tp-button-cluster
      color="${args.color}"
      state="${args.state}"
      ?loading="${args.loading}"
    >
      <tp-text slot="expand-text" tp-type="p12">expand-message</tp-text>
      <tp-text slot="collapse-text" tp-type="p12">collapse-message</tp-text>
    </tp-button-cluster>`;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-button-cluster/gi)).toBeTruthy();
  }, */
};
