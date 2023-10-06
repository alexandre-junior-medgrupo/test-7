import type { Preview } from '@storybook/web-components';
import { html } from 'lit';
import {
  TP_COLOR_BRAND,
  TP_COLOR_FEEDBACK,
  TP_COLOR_NEUTRAL,
} from '../src/utils/constants/color.constants';

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
import '../templarios/css/themes/templarios.medsoft.theme.css';
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
          class: ['templarios-ionic', 'tp-color-theme-medsoft'],
          color: '#3aa8b9',
        },
        {
          name: 'MedSoft Light',
          class: [
            'templarios-ionic',
            'tp-color-theme-medsoft',
            'tp-color-scheme-light',
          ],
          color: '#3aa8b9',
        },
      ],
    },
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [...TP_COLOR_BRAND, ...TP_COLOR_FEEDBACK, ...TP_COLOR_NEUTRAL],
    },
  },
  decorators: [
    (story) => html`
      <ion-app>
        <ion-content> ${story()} </ion-content>
      </ion-app>
    `,
  ],
};

export default preview;
