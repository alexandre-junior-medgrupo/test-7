import { Components } from '@ionic/core';
import { IonButton } from '@ionic/core/components/ion-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { TpIonToast } from './toast.type';
declare const meta: Meta<Components.IonToast & TpIonToast & IonButton>;
export default meta;
type Story = StoryObj<Components.IonToast & TpIonToast & IonButton>;
export declare const Default: Story;
