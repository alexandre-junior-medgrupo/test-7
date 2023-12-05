import type { TpColor } from 'src/components';
import { TpIonToastWarning } from './toast.enum';

export type TpIonToast = {
  color: `${TpColor}`;
  warning: `${TpIonToastWarning}`;
};
