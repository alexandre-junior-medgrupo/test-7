import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import {
  Component,
  ChangeDetectionStrategy,
  APP_INITIALIZER,
  NgModule,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from 'tp-core/loader';

/* eslint-disable */
/* tslint:disable */
const proxyInputs = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach((item) => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => (this.el[item] = val));
      },
      /**
       * In the event that proxyInputs is called
       * multiple times re-defining these inputs
       * will cause an error to be thrown. As a result
       * we set configurable: true to indicate these
       * properties can be changed.
       */
      configurable: true,
    });
  });
};
const proxyMethods = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach((methodName) => {
    Prototype[methodName] = function () {
      const args = arguments;
      return this.z.runOutsideAngular(() =>
        this.el[methodName].apply(this.el, args),
      );
    };
  });
};
const proxyOutputs = (instance, el, events) => {
  events.forEach(
    (eventName) => (instance[eventName] = fromEvent(el, eventName)),
  );
};
const defineCustomElement = (tagName, customElement) => {
  if (
    customElement !== undefined &&
    typeof customElements !== 'undefined' &&
    !customElements.get(tagName)
  ) {
    customElements.define(tagName, customElement);
  }
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
  const decorator = function (cls) {
    const { defineCustomElementFn, inputs, methods } = opts;
    if (defineCustomElementFn !== undefined) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}

let TpTest = class TpTest {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: TpTest,
      deps: [
        { token: i0.ChangeDetectorRef },
        { token: i0.ElementRef },
        { token: i0.NgZone },
      ],
      target: i0.ɵɵFactoryTarget.Component,
    });
  }
  static {
    this.ɵcmp = i0.ɵɵngDeclareComponent({
      minVersion: '14.0.0',
      version: '16.2.12',
      type: TpTest,
      selector: 'tp-test',
      inputs: { color: 'color', icon: 'icon' },
      ngImport: i0,
      template: '<ng-content></ng-content>',
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
TpTest = __decorate(
  [
    ProxyCmp({
      inputs: ['color', 'icon'],
    }),
  ],
  TpTest,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TpTest,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: 'tp-test',
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: '<ng-content></ng-content>',
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ['color', 'icon'],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      { type: i0.ChangeDetectorRef },
      { type: i0.ElementRef },
      { type: i0.NgZone },
    ];
  },
});

const DIRECTIVES = [TpTest];

class TemplariosModule {
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: TemplariosModule,
      deps: [],
      target: i0.ɵɵFactoryTarget.NgModule,
    });
  }
  static {
    this.ɵmod = i0.ɵɵngDeclareNgModule({
      minVersion: '14.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: TemplariosModule,
      declarations: [TpTest],
      exports: [TpTest],
    });
  }
  static {
    this.ɵinj = i0.ɵɵngDeclareInjector({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: TemplariosModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: () => defineCustomElements,
          multi: true,
        },
      ],
    });
  }
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TemplariosModule,
  decorators: [
    {
      type: NgModule,
      args: [
        {
          declarations: [...DIRECTIVES],
          imports: [],
          exports: [...DIRECTIVES],
          providers: [
            {
              provide: APP_INITIALIZER,
              useFactory: () => defineCustomElements,
              multi: true,
            },
          ],
        },
      ],
    },
  ],
});

/**
 * Generated bundle index. Do not edit.
 */

export { DIRECTIVES, TemplariosModule, TpTest };
//# sourceMappingURL=tp-angular.mjs.map
