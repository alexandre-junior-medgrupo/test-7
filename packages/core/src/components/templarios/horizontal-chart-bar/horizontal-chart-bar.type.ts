import type { TpColor } from '../../../utils/types/color.type';
import { TpHorizontalChartBarSize } from './horizontal-chart-bar.enum';

export type TpHorizontalChartBar = {
  color: `${TpColor}`;
  value: number;
  isCount: boolean;
  maxCount: number;
  hideValue: boolean;
  size: `${TpHorizontalChartBarSize}`;
};
