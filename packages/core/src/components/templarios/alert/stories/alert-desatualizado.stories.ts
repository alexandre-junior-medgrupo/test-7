import { defineCustomElement as defineCustomElementSkeletonText } from '@ionic/core/components/ion-skeleton-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ICONS_STORYBOOK } from '../../../../utils/constants/icon.constant';
import { TpIonIcon } from '../../../ionic/icon/utils/icon.type';
import { TpAlert } from '../alert';
import { TpAlertType } from '../alert.type';

//
// !IMPORTANT! Antigo med-alert-fixed
//

defineCustomElementSkeletonText();

const meta: Meta<TpAlert & TpAlertType & TpIonIcon> = {
  title: 'components/Templarios/Alert',
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [...TP_ICONS_STORYBOOK],
      description: 'Define o path e nome do icone.',
    },
    text: {
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
    color: 'provas-4',
    icon: `${TP_ICONS_STORYBOOK[1]}`,
    text: 'Versão desatualizada',
  },
};

export default meta;

type Story = StoryObj<TpAlert & TpAlertType & TpIonIcon>;

export const Desatualizado: Story = {
  render: ({ ...args }) => {
    const iconUrl = `./icons/${args.icon}`;

    return html`<tp-alert
      color="${args.color}"
      ?loading="${args.loading}"
    >
      <ion-icon class="tp-alert__icon" slot="icon" tp-size="sm" src="${iconUrl}"></ion-icon>
      <ion-text class="tp-alert__text" slot="text" tp-type="p12x">${args.text}</ion-text>
    </tp-alert>`;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-alert/gi)).toBeTruthy();
  }, */
};
