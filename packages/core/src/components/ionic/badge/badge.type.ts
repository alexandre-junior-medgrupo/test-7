import { TpColor } from '@utils/types/color.type';
import { TpIonBadgeFill, TpIonBadgeSize } from './badge.enum';

export type TpIonBadge = {
  color: `${TpColor}`;
  size: `${TpIonBadgeSize}`;
  fill: `${TpIonBadgeFill}`;
};
