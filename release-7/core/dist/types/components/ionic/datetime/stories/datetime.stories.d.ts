import { Components } from '@ionic/core';
import { IonDatetimeButton } from '@ionic/core/components/ion-datetime-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpInputContainer } from "../../../templarios/input-container/input-container";
import { TpIonDatetime } from '../utils/datetime.type';
declare const meta: Meta<Components.IonDatetime & IonDatetimeButton & TpIonDatetime & TpInputContainer>;
export default meta;
type Story = StoryObj<Components.IonDatetime & IonDatetimeButton & TpIonDatetime & TpInputContainer>;
export declare const Default: Story;
