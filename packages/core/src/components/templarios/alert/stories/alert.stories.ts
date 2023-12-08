import { defineCustomElement as defineCustomElementSkeletonText } from '@ionic/core/components/ion-skeleton-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpAlert } from '../alert';
import { TP_ALERT } from '../alert.constants';
import { TpAlertState } from '../alert.enum';

// antigo med-alert-fixed
defineCustomElementSkeletonText();

const meta: Meta<TpAlert> = {
  title: 'components/Templarios/Alert',
  argTypes: {
    state: {
      control: { type: 'radio' },
      options: [...TP_ALERT.state],
      description: `Define a variação de estado do componente.

**OBS**: O **state="${TpAlertState.ATUALIZAR}"** está disponível apenas no theme **MedSoft**.`,
      // TODO  OU USAR HASH PARA COR???
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: [...TP_ALERT.state].join('|'),
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
    state: TpAlertState.OFFLINE,
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: ({ ...args }) => {
    return html`<tp-alert
      state="${args.state}"
      ?loading="${args.loading}"
    ></tp-alert>`;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-alert/gi)).toBeTruthy();
  }, */
};
Default.argTypes = {
  color: { table: { disable: true } },
};
