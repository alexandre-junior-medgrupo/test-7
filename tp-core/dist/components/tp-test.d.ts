import type { Components, JSX } from "../types/components";

interface TpTest extends Components.TpTest, HTMLElement {}
export const TpTest: {
  prototype: TpTest;
  new (): TpTest;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
