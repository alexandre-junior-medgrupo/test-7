import type { TpColor } from '../../../utils/types/color.type';
export declare class TpChartBar {
    /**
     * Define a variação de cor do componente.
     */
    color?: TpColor;
    /**
     * Define o valor do preenchimento do componente.
     */
    value: number;
    /**
     * Define a altura do componente.
     */
    height: number;
    /**
     * Define a largura do componente.
     */
    width: number;
    /**
     * Define se o componente irá apresentar rótulo ou não.
     */
    noLabel: boolean;
    render(): any;
}
