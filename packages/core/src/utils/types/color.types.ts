import {
  TpColorBrand,
  TpColorFeedback,
  TpColorNeutral,
} from '../enums/color.enums';

export type TpColor =
  | `${TpColorNeutral}`
  | `${TpColorFeedback}`
  | `${TpColorBrand}`;
