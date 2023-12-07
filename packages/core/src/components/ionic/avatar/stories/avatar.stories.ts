import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-avatar';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import {
  TP_COLORS,
  TP_COLORS_MEDSOFT,
  TP_COLORS_RECURSOS,
} from '../../../../utils/constants/color.constant';
import {
  TpColorAula,
  TpColorMaterial,
  TpColorOrange,
  TpColorProvas,
  TpColorQuestoes,
  TpColorRevalida,
} from '../../../../utils/enums/color.enum';
import { TP_ION_AVATAR } from '../utils/avatar.constant';
import { TpIonAvatar } from '../utils/avatar.type';

defineCustomElement();

const meta: Meta<Components.IonAvatar & TpIonAvatar & any> = {
  title: 'components/Ionic/Avatar',
  argTypes: {
    'tp-color': {
      control: { type: 'select' },
      options: [...TP_COLORS, ...TP_COLORS_MEDSOFT, ...TP_COLORS_RECURSOS],
      description: `Define a cor do componente.

**OBS**: As cores **'${TpColorAula.Aula}'**, **'${TpColorMaterial.Material}'**, **'${TpColorQuestoes.Questoes}'**, **'${TpColorRevalida.Revalida}'** e **'${TpColorProvas.Provas}'** estão disponiveis apenas no theme **MedSoft**.

**OBS**: A cor **'${TpColorOrange.Orange}'** está disponivel apenas no theme **Recursos**.`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: [
            ...TP_COLORS,
            ...TP_COLORS_MEDSOFT,
            ...TP_COLORS_RECURSOS,
          ].join('|'),
        },
      },
    },
    ['tp-size']: {
      control: { type: 'select' },
      options: [...TP_ION_AVATAR['tp-size']],
      description: 'Define  o tamanho do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_AVATAR['tp-size'].join('|'),
        },
      },
    },
    color: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<Components.IonAvatar & TpIonAvatar>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-avatar tp-color="${args['tp-color']}" tp-size="${args['tp-size']}">
      <ion-label>AB</ion-label>
    </ion-avatar>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-avatar/gi)).toBeTruthy();
  }, */
};

export const Image: Story = {
  render: ({ ...args }) => html`
    <ion-avatar tp-size="${args['tp-size']}">
      <img
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        alt="Silhouette of a person's head"
      />
    </ion-avatar>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-avatar/gi)).toBeTruthy();
  }, */
};
Image.argTypes = {
  'tp-color': { table: { disable: true } },
};
