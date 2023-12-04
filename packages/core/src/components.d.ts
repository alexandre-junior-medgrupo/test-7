/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TpColor } from "./utils/types/color.type";
export { TpColor } from "./utils/types/color.type";
export namespace Components {
    interface TpChartBar {
        /**
          * todo
         */
        "color"?: TpColor;
        /**
          * todo
         */
        "height": number;
        /**
          * todo
         */
        "noLabel": boolean;
        /**
          * todo
         */
        "value": number;
        /**
          * todo
         */
        "width": number;
    }
    interface TpProgressBarContainer {
        "color"?: TpColor;
        "value"?: string;
    }
    interface TpTest {
        "color"?: TpColor;
        "icon"?: string;
    }
}
declare global {
    interface HTMLTpChartBarElement extends Components.TpChartBar, HTMLStencilElement {
    }
    var HTMLTpChartBarElement: {
        prototype: HTMLTpChartBarElement;
        new (): HTMLTpChartBarElement;
    };
    interface HTMLTpProgressBarContainerElement extends Components.TpProgressBarContainer, HTMLStencilElement {
    }
    var HTMLTpProgressBarContainerElement: {
        prototype: HTMLTpProgressBarContainerElement;
        new (): HTMLTpProgressBarContainerElement;
    };
    interface HTMLTpTestElement extends Components.TpTest, HTMLStencilElement {
    }
    var HTMLTpTestElement: {
        prototype: HTMLTpTestElement;
        new (): HTMLTpTestElement;
    };
    interface HTMLElementTagNameMap {
        "tp-chart-bar": HTMLTpChartBarElement;
        "tp-progress-bar-container": HTMLTpProgressBarContainerElement;
        "tp-test": HTMLTpTestElement;
    }
}
declare namespace LocalJSX {
    interface TpChartBar {
        /**
          * todo
         */
        "color"?: TpColor;
        /**
          * todo
         */
        "height"?: number;
        /**
          * todo
         */
        "noLabel"?: boolean;
        /**
          * todo
         */
        "value"?: number;
        /**
          * todo
         */
        "width"?: number;
    }
    interface TpProgressBarContainer {
        "color"?: TpColor;
        "value"?: string;
    }
    interface TpTest {
        "color"?: TpColor;
        "icon"?: string;
    }
    interface IntrinsicElements {
        "tp-chart-bar": TpChartBar;
        "tp-progress-bar-container": TpProgressBarContainer;
        "tp-test": TpTest;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "tp-chart-bar": LocalJSX.TpChartBar & JSXBase.HTMLAttributes<HTMLTpChartBarElement>;
            "tp-progress-bar-container": LocalJSX.TpProgressBarContainer & JSXBase.HTMLAttributes<HTMLTpProgressBarContainerElement>;
            "tp-test": LocalJSX.TpTest & JSXBase.HTMLAttributes<HTMLTpTestElement>;
        }
    }
}
