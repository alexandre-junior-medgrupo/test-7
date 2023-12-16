import type { TpColor } from '../../../utils/types/color.type';
export declare class TpInputContainer {
    private alertTriangleIcon;
    private CheckIcon;
    /**
    * Define a variação de cor do componente.
    */
    color?: TpColor;
    /**
     * Define a variação de estado do componente.
     */
    state?: 'error' | 'success';
    render(): any;
}
