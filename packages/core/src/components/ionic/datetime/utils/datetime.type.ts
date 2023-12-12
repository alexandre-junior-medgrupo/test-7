import type { TpColor } from '../../../../utils/types/color.type';
import { TpIonDatetimePresentation } from './datetime.enum';

export type TpIonDatetime = {
  color: `${TpColor}`;
  presentation: `${TpIonDatetimePresentation}`;
};
