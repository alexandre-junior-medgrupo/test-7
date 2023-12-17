import { defineCustomElement as defineCustomElementDatetime } from "@ionic/core/components/ion-datetime";
import { defineCustomElement as defineCustomElementDatetimeButton } from "@ionic/core/components/ion-datetime-button";
import { html } from "lit";
defineCustomElementDatetime();
defineCustomElementDatetimeButton();
const meta = {
    title: 'components/Ionic/Date-picker',
    argTypes: {},
};
export default meta;
const openDatetime = () => {
    const datetime = document.getElementById('input-container');
    datetime.classList.add('tp-datetime-visible');
};
export const Default = {
    render: () => {
        return html `
      <tp-input-container id="input-container" @click=${openDatetime}>
        <ion-label slot="label" tp-type="p14">Descrição Datetime</ion-label>
        <ion-datetime-button mode="ios" datetime="datetime"></ion-datetime-button>
        <ion-icon src="./icons/tp-calendar.svg"></ion-icon>

        <ion-datetime mode="md" id="datetime" presentation="date">
          <div slot="buttons">
            <ion-button fill="clear" size="xxs">
              <ion-label tp-type="p12b">Cancelar</ion-label>
            </ion-button>
            <ion-button fill="clear" size="xxs">
              <ion-label tp-type="p12b">Ok</ion-label>
            </ion-button>
            </div>
        </ion-datetime>
      </tp-input-container>`;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=date-picker.stories.js.map
