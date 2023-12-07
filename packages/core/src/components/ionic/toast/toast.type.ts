import type { TpColor } from '../../../utils/types/color.type';
import { TpIonToastWarning } from './toast.enum';

export type TpIonToast = {
  color: `${TpColor}`;
  warning: `${TpIonToastWarning}`;
};
