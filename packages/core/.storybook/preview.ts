import type { Preview } from '@storybook/web-components';
import { html } from 'lit';

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
import '../templarios/css/themes/default.theme.css';
// templarios

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
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
