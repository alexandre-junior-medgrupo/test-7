import type { Preview } from '@storybook/web-components';
import { html } from 'lit';
import {
  TP_COLORS,
  TP_COLORS_MEDSOFT,
  TP_COLORS_RECURSOS
} from '../src/utils/constants/color.constant';
import {
  TpSchemeCSSClasses,
  TpThemeCSSClasses
} from '../src/utils/enums/theme.enum';

// storybook
import './assets/storybook.css';
// storybook

// ionic
import { initialize } from '@ionic/core/components';
import { defineCustomElement } from 'ionicons/components/ion-icon';

initialize();
defineCustomElement();

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
import { defineCustomElements } from '../loader';
import { TpColorAula, TpColorMaterial, TpColorOrange, TpColorQuestoes, TpColorRevalida } from '../src/utils/enums/color.enum';

import '../templarios/css/templarios.css';

defineCustomElements();
// templarios

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: { disable: true },
    staticDirs: ['../dist', '../public'],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Templarios', 'Core', 'Utils', 'Components'],
      },
    },
    themes: {
      target: 'root',
      default: 'default',
      onChange: (themeName) => {},
      list: [
        {
          name: 'MedSoft',
          class: [`${TpThemeCSSClasses.MedSoft}`],
          color: '#14A2B8',
        },
        {
          name: 'MedSoft Light',
          class: [`${TpThemeCSSClasses.MedSoft}`, `${TpSchemeCSSClasses.Light}`],
          color: '#3D848F',
        },
        {
          name: 'Recursos',
          class: [`${TpThemeCSSClasses.Recursos}`],
          color: '#68a6ba',
        },
        {
          name: 'Recursos Light',
          class: [`${TpThemeCSSClasses.Recursos}`, `${TpSchemeCSSClasses.Light}`],
          color: '#3d7a8f',
        },
        {
          name: 'CPMed',
          class: [`${TpThemeCSSClasses.CPMed}`],
          color: '#B83514',
        },
        {
          name: 'CPMed Light',
          class: [`${TpThemeCSSClasses.CPMed}`, `${TpSchemeCSSClasses.Light}`],
          color: '#8F4E3D',
        },
        {
          name: 'CPVent',
          class: [`${TpThemeCSSClasses.CPVent}`],
          color: '#97B814',
        },
        {
          name: 'CPVent Light',
          class: [`${TpThemeCSSClasses.CPVent}`, `${TpSchemeCSSClasses.Light}`],
          color: '#7E8F3D',
        },
        {
          name: 'Extensivo R+',
          class: [`${TpThemeCSSClasses.Extensivo_RMais}`],
          color: '#B814B8',
        },
        {
          name: 'Extensivo R+ Light',
          class: [`${TpThemeCSSClasses.Extensivo_RMais}`, `${TpSchemeCSSClasses.Light}`],
          color: '#8F3D8F',
        },
        {
          name: 'Extensivo',
          class: [`${TpThemeCSSClasses.Extensivo}`],
          color: '#5b14b8',
        },
        {
          name: 'Extensivo Light',
          class: [`${TpThemeCSSClasses.Extensivo}`, `${TpSchemeCSSClasses.Light}`],
          color: '#613d8f',
        },
        {
          name: 'Intensivão',
          class: [`${TpThemeCSSClasses.Intensivao}`],
          color: '#B81440',
        },
        {
          name: 'Intensivão Light',
          class: [`${TpThemeCSSClasses.Intensivao}`, `${TpSchemeCSSClasses.Light}`],
          color: '#8F3D53',
        },
        {
          name: 'MedEletro',
          class: [`${TpThemeCSSClasses.MedEletro}`],
          color: '#14B8B8',
        },
        {
          name: 'MedEletro Light',
          class: [`${TpThemeCSSClasses.MedEletro}`, `${TpSchemeCSSClasses.Light}`],
          color: '#3D8F8F',
        },
        {
          name: 'MedMaster',
          class: [`${TpThemeCSSClasses.MedMaster}`],
          color: '#B8AD14',
        },
        {
          name: 'MedMaster Light',
          class: [`${TpThemeCSSClasses.MedMaster}`, `${TpSchemeCSSClasses.Light}`],
          color: '#8F893D',
        },
        {
          name: 'NoPapo',
          class: [`${TpThemeCSSClasses.NoPapo}`],
          color: '#1430b8',
        },
        {
          name: 'NoPapo Light',
          class: [`${TpThemeCSSClasses.NoPapo}`, `${TpSchemeCSSClasses.Light}`],
          color: '#3d4b8f',
        },
        {
          name: 'Ventilamed',
          class: [`${TpThemeCSSClasses.Ventilamed}`],
          color: '#B86314',
        },
        {
          name: 'Ventilamed Light',
          class: [`${TpThemeCSSClasses.Ventilamed}`, `${TpSchemeCSSClasses.Light}`],
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

**OBS**: As cores **'${TpColorAula.Aula}'**, **'${TpColorMaterial.Material}'**, **'${TpColorQuestoes.Questoes}'**, **'${TpColorRevalida.Revalida}'** e **'${TpColorRevalida.Revalida}'** estão disponiveis apenas no theme **MedSoft**

**OBS**: A cor **'${TpColorOrange.Orange}'** está disponivel apenas no theme **Recursos**`,
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
