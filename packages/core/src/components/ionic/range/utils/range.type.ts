import type { TpColor } from '../../../../utils/types/color.type';
import type { TpIonRangeVariant } from '../utils/range.enum';

export type TpIonRange = {
  color: `${TpColor}`;
  secondary: `${TpIonRangeVariant}`;
};
