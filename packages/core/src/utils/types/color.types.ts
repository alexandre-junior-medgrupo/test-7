import {
  TpColorAula,
  TpColorBrand,
  TpColorFeedback,
  TpColorMaterial,
  TpColorNeutral,
  TpColorOrange,
  TpColorProvas,
  TpColorQuestoes,
  TpColorRevalida,
} from '../enums/color.enums';

export type TpColors =
  | `${TpColorNeutral}`
  | `${TpColorFeedback}`
  | `${TpColorBrand}`;

export type TpColorsMedgrupo =
  | `${TpColorAula}`
  | `${TpColorMaterial}`
  | `${TpColorQuestoes}`
  | `${TpColorRevalida}`
  | `${TpColorProvas}`;

export type TpColorsRecursos = `${TpColorOrange}`;
