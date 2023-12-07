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
import { defineCustomElement } from "@ionic/core/components/ion-searchbar";
import { html } from "lit";
defineCustomElement();
const meta = {
    title: 'components/Ionic/Searchbar',
    component: 'ion-searchbar',
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Define a estilização do estado disabled do componente.',
            table: {
                defaultValue: {
                    summary: false,
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
    },
};
export default meta;
export const Default = {
    render: (_a) => {
        var args = __rest(_a, []);
        return html `
    <ion-searchbar
      color="${args.color}"
      ?disabled="${args.disabled}"
      mode="md"
      search-icon="./../../../../icons/tp-search.svg"
      clear-icon="./../../../../icons/tp-x.svg"
      placeholder="Lorem ipsum dolor"
    ></ion-searchbar>
  `;
    },
    /* play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      expect(canvas.getByText(/ion-searchbar/gi)).toBeTruthy();
    }, */
};
//# sourceMappingURL=searchbar.stories.js.map
