import {
  Component,
  Host,
  h
} from '@stencil/core';
/* import { IonButton } from '@ionic/core/components/ion-button';
import { TpIonButton } from '../../../ionic/button/utils/button.type'; */

@Component({
  tag: 'modal-example',
  styleUrl: 'modal-example.scss',
  scoped: true,
})
export class ModalExample {
  render() {
    return (
      <Host>
        <h1>Exemplo de modal</h1>
      </Host>
    )
  }
}
