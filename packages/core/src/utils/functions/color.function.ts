import { TpColor } from '../types/color.type';
import { TpCssClassMap } from '../types/utils.type';

export const createColorClasses = (
  color: TpColor | undefined | null,
  cssClassMap: TpCssClassMap,
): TpCssClassMap => {
  return typeof color === 'string' && color.length > 0
    ? {
        'tp-color': true,
        [`tp-color-${color}`]: true,
        ...cssClassMap,
      }
    : cssClassMap;
};
