var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { defineCustomElement as defineCustomElementAccordion } from "@ionic/core/components/ion-accordion";
import { defineCustomElement as defineCustomElementAccordionGroup } from "@ionic/core/components/ion-accordion-group";
import { defineCustomElement as defineCustomElementItem } from "@ionic/core/components/ion-item";
import { defineCustomElement as defineCustomElementLabel } from "@ionic/core/components/ion-label";
import { html } from "lit";
defineCustomElementAccordionGroup();
defineCustomElementAccordion();
defineCustomElementItem();
defineCustomElementLabel();
const meta = {
    title: 'components/Ionic/Accordion',
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-accordion-group>
      <ion-accordion value="first">
        <ion-item slot="header" .color="${args.color}">
          <ion-label>First Accordion</ion-label>
        </ion-item>
        <div class="ion-padding" slot="content">First Content</div>
      </ion-accordion>
      <ion-accordion value="second">
        <ion-item slot="header" .color="${args.color}">
          <ion-label>Second Accordion</ion-label>
        </ion-item>
        <div class="ion-padding" slot="content">Second Content</div>
      </ion-accordion>
      <ion-accordion value="third">
        <ion-item slot="header" .color="${args.color}">
          <ion-label>Third Accordion</ion-label>
        </ion-item>
        <div class="ion-padding" slot="content">Third Content</div>
      </ion-accordion>
    </ion-accordion-group>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=accordion.stories.js.map
