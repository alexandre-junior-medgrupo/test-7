import type { Preview } from '@storybook/web-components';
import { html } from 'lit';
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
import '../templarios/css/templarios.themes.css';
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
          class: ['tp-color-theme-medsoft'],
          color: '#14A2B8',
        },
        {
          name: 'MedSoft Light',
          class: ['tp-color-theme-medsoft', 'tp-color-scheme-light'],
          color: '#3D848F',
        },
        {
          name: 'Recursos',
          class: ['tp-color-theme-recursos'],
          color: '#68a6ba',
        },
        {
          name: 'Recursos Light',
          class: ['tp-color-theme-recursos', 'tp-color-scheme-light'],
          color: '#3d7a8f',
        },
        {
          name: 'CPMed',
          class: ['tp-color-theme-cpmed'],
          color: '#B83514',
        },
        {
          name: 'CPMed Light',
          class: ['tp-color-theme-cpmed', 'tp-color-scheme-light'],
          color: '#8F4E3D',
        },
        {
          name: 'CPVent',
          class: ['tp-color-theme-cpvent'],
          color: '#97B814',
        },
        {
          name: 'CPVent Light',
          class: ['tp-color-theme-cpvent', 'tp-color-scheme-light'],
          color: '#7E8F3D',
        },
        {
          name: 'Extensivo R+',
          class: ['tp-color-theme-extensivo-rmais'],
          color: '#B814B8',
        },
        {
          name: 'Extensivo R+ Light',
          class: ['tp-color-theme-extensivo-rmais', 'tp-color-scheme-light'],
          color: '#8F3D8F',
        },
        {
          name: 'Intensivão',
          class: ['tp-color-theme-intensivao'],
          color: '#B81440',
        },
        {
          name: 'Intensivão Light',
          class: ['tp-color-theme-intensivao', 'tp-color-scheme-light'],
          color: '#8F3D53',
        },
        {
          name: 'MedEletro',
          class: ['tp-color-theme-medeletro'],
          color: '#14B8B8',
        },
        {
          name: 'MedEletro Light',
          class: ['tp-color-theme-medeletro', 'tp-color-scheme-light'],
          color: '#3D8F8F',
        },
        {
          name: 'MedMaster',
          class: ['tp-color-theme-medmaster'],
          color: '#B8AD14',
        },
        {
          name: 'MedMaster Light',
          class: ['tp-color-theme-medmaster', 'tp-color-scheme-light'],
          color: '#8F893D',
        },
        {
          name: 'NoPapo',
          class: ['tp-color-theme-no-papo'],
          color: '#1430b8',
        },
        {
          name: 'NoPapo Light',
          class: ['tp-color-theme-no-papo', 'tp-color-scheme-light'],
          color: '#3d4b8f',
        },
        {
          name: 'Ventilamed',
          class: ['tp-color-theme-ventilamed'],
          color: '#B86314',
        },
        {
          name: 'Ventilamed Light',
          class: ['tp-color-theme-ventilamed', 'tp-color-scheme-light'],
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
