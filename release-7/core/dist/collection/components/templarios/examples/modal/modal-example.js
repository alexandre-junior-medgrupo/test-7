import { Host, h } from "@stencil/core";
/* import { IonButton } from '@ionic/core/components/ion-button';
import { TpIonButton } from '../../../ionic/button/utils/button.type'; */
export class ModalExample {
    render() {
        return (h(Host, null, h("h1", null, "Exemplo de modal")));
    }
    static get is() { return "modal-example"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["modal-example.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["modal-example.css"]
        };
    }
}
//# sourceMappingURL=modal-example.js.map
