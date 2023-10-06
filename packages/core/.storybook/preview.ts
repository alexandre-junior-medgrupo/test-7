import type { Preview } from '@storybook/web-components';
import {
  NAMESPACE,
} from '../src/utils/constants/base.constants';

import {
  TP_COLORS,
  TP_COLORS_MEDSOFT,
  TP_COLORS_RECURSOS
} from '../src/utils/constants/color.constants';

// storybook
import './assets/storybook.css';
// storybook

// ionic
import { initialize } from '@ionic/core/components';
initialize();

import '@ionic/core/css/core.css';
import '@ionic/core/css/display.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/padding.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/typography.css';

import { defineCustomElement as defineCustomElementIonApp } from '@ionic/core/components/ion-app';
import { defineCustomElement as defineCustomElementIonContent } from '@ionic/core/components/ion-content';
defineCustomElementIonApp();
defineCustomElementIonContent();
// ionic

// templarios
import '../templarios/css/templarios.colors.css';
import '../templarios/css/templarios.ionic.components.css';
// templarios themes
import { html } from 'lit';
import '../templarios/css/themes/templarios.cpmed.theme.css';
import '../templarios/css/themes/templarios.cpvent.theme.css';
import '../templarios/css/themes/templarios.extensivo-rmais.theme.css';
import '../templarios/css/themes/templarios.extensivo.theme.css';
import '../templarios/css/themes/templarios.intensivao.theme.css';
import '../templarios/css/themes/templarios.medeletro.theme.css';
import '../templarios/css/themes/templarios.medmaster.theme.css';
import '../templarios/css/themes/templarios.medsoft.theme.css';
import '../templarios/css/themes/templarios.nopapo.theme.css';
import '../templarios/css/themes/templarios.recursos.theme.css';
import '../templarios/css/themes/templarios.ventilamed.theme.css';
// templarios

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      target: 'root',
      default: 'default',
      onChange: (themeName) => {},
      list: [
        {
          name: 'MedSoft',
          class: [`${NAMESPACE}-color-theme-medsoft`],
          color: '#14A2B8',
        },
        {
          name: 'MedSoft Light',
          class: [`${NAMESPACE}-color-theme-medsoft`, `${NAMESPACE}-color-scheme-light`],
          color: '#3D848F',
        },
        {
          name: 'Recursos',
          class: [`${NAMESPACE}-color-theme-recursos`],
          color: '#68a6ba',
        },
        {
          name: 'Recursos Light',
          class: [`${NAMESPACE}-color-theme-recursos`, `${NAMESPACE}-color-scheme-light`],
          color: '#3d7a8f',
        },
        {
          name: 'CPMed',
          class: [`${NAMESPACE}-color-theme-cpmed`],
          color: '#B83514',
        },
        {
          name: 'CPMed Light',
          class: [`${NAMESPACE}-color-theme-cpmed`, `${NAMESPACE}-color-scheme-light`],
          color: '#8F4E3D',
        },
        {
          name: 'CPVent',
          class: [`${NAMESPACE}-color-theme-cpvent`],
          color: '#97B814',
        },
        {
          name: 'CPVent Light',
          class: [`${NAMESPACE}-color-theme-cpvent`, `${NAMESPACE}-color-scheme-light`],
          color: '#7E8F3D',
        },
        {
          name: 'Extensivo R+',
          class: [`${NAMESPACE}-color-theme-extensivo-rmais`],
          color: '#B814B8',
        },
        {
          name: 'Extensivo R+ Light',
          class: [`${NAMESPACE}-color-theme-extensivo-rmais`, `${NAMESPACE}-color-scheme-light`],
          color: '#8F3D8F',
        },
        {
          name: 'Intensivão',
          class: [`${NAMESPACE}-color-theme-intensivao`],
          color: '#B81440',
        },
        {
          name: 'Intensivão Light',
          class: [`${NAMESPACE}-color-theme-intensivao`, `${NAMESPACE}-color-scheme-light`],
          color: '#8F3D53',
        },
        {
          name: 'MedEletro',
          class: [`${NAMESPACE}-color-theme-medeletro`],
          color: '#14B8B8',
        },
        {
          name: 'MedEletro Light',
          class: [`${NAMESPACE}-color-theme-medeletro`, `${NAMESPACE}-color-scheme-light`],
          color: '#3D8F8F',
        },
        {
          name: 'MedMaster',
          class: [`${NAMESPACE}-color-theme-medmaster`],
          color: '#B8AD14',
        },
        {
          name: 'MedMaster Light',
          class: [`${NAMESPACE}-color-theme-medmaster`, `${NAMESPACE}-color-scheme-light`],
          color: '#8F893D',
        },
        {
          name: 'NoPapo',
          class: [`${NAMESPACE}-color-theme-no-papo`],
          color: '#1430b8',
        },
        {
          name: 'NoPapo Light',
          class: [`${NAMESPACE}-color-theme-no-papo`, `${NAMESPACE}-color-scheme-light`],
          color: '#3d4b8f',
        },
        {
          name: 'Ventilamed',
          class: [`${NAMESPACE}-color-theme-ventilamed`],
          color: '#B86314',
        },
        {
          name: 'Ventilamed Light',
          class: [`${NAMESPACE}-color-theme-ventilamed`, `${NAMESPACE}-color-scheme-light`],
          color: '#8F653D',
        },
      ],
    },
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [...TP_COLORS, ...TP_COLORS_MEDSOFT, ...TP_COLORS_RECURSOS],
      description: `Define a cor do componente.

**OBS**: As cores **'aula'**, **'material'**, **'questoes'**, **'revalida'** e **'provas'** estão disponiveis apenas no theme **MedSoft**

**OBS**: A cor **'orange'** está disponivel apenas no theme **Recursos**`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: [...TP_COLORS, ...TP_COLORS_MEDSOFT, ...TP_COLORS_RECURSOS].join('|'),
        },
      },
    },
  },
  decorators: [
    (story) =>
      html`
<ion-app>
  <ion-content>
    ${story()}
  </ion-content>
</ion-app>`,
  ],
};

export default preview;
