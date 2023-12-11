import type { TpColor } from '../../../utils/types/color.type';
import { TpAlertType } from './alert.type';
export declare class TpAlert {
    /**
     * Define a variação de cor do componente.
     */
    color?: TpColor;
    /**
     * Define a variação de estado do componente.
     */
    state?: TpAlertType['state'];
    /**
     * Define a string a ser exibida no componente.
     */
    message: string;
    /**
     * Define o icon a ser exibido no componente.
     */
    icon: string;
    /**
     * Define o estado de carregamento do componente.
     */
    loading?: boolean;
    render(): any;
}
