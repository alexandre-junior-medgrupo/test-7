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

let TpAlert = class TpAlert {
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
      type: TpAlert,
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
      type: TpAlert,
      selector: 'tp-alert',
      inputs: {
        color: 'color',
        icon: 'icon',
        loading: 'loading',
        message: 'message',
        state: 'state',
      },
      ngImport: i0,
      template: '<ng-content></ng-content>',
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
TpAlert = __decorate(
  [
    ProxyCmp({
      inputs: ['color', 'icon', 'loading', 'message', 'state'],
    }),
  ],
  TpAlert,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TpAlert,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: 'tp-alert',
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: '<ng-content></ng-content>',
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ['color', 'icon', 'loading', 'message', 'state'],
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
let TpChartBar = class TpChartBar {
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
      type: TpChartBar,
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
      type: TpChartBar,
      selector: 'tp-chart-bar',
      inputs: {
        color: 'color',
        height: 'height',
        loading: 'loading',
        noLabel: 'noLabel',
        value: 'value',
        width: 'width',
      },
      ngImport: i0,
      template: '<ng-content></ng-content>',
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
TpChartBar = __decorate(
  [
    ProxyCmp({
      inputs: ['color', 'height', 'loading', 'noLabel', 'value', 'width'],
    }),
  ],
  TpChartBar,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TpChartBar,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: 'tp-chart-bar',
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: '<ng-content></ng-content>',
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ['color', 'height', 'loading', 'noLabel', 'value', 'width'],
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
let TpComparisonChartBar = class TpComparisonChartBar {
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
      type: TpComparisonChartBar,
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
      type: TpComparisonChartBar,
      selector: 'tp-comparison-chart-bar',
      inputs: {
        barValue: 'barValue',
        color: 'color',
        containerHeight: 'containerHeight',
        disabled: 'disabled',
        hasMarker: 'hasMarker',
        loading: 'loading',
        markerValue: 'markerValue',
        noLabel: 'noLabel',
      },
      ngImport: i0,
      template: '<ng-content></ng-content>',
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
TpComparisonChartBar = __decorate(
  [
    ProxyCmp({
      inputs: [
        'barValue',
        'color',
        'containerHeight',
        'disabled',
        'hasMarker',
        'loading',
        'markerValue',
        'noLabel',
      ],
    }),
  ],
  TpComparisonChartBar,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TpComparisonChartBar,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: 'tp-comparison-chart-bar',
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: '<ng-content></ng-content>',
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: [
            'barValue',
            'color',
            'containerHeight',
            'disabled',
            'hasMarker',
            'loading',
            'markerValue',
            'noLabel',
          ],
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
let TpHorizontalChartBar = class TpHorizontalChartBar {
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
      type: TpHorizontalChartBar,
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
      type: TpHorizontalChartBar,
      selector: 'tp-horizontal-chart-bar',
      inputs: {
        color: 'color',
        loading: 'loading',
        maxCount: 'maxCount',
        noLabel: 'noLabel',
        size: 'size',
        value: 'value',
      },
      ngImport: i0,
      template: '<ng-content></ng-content>',
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
TpHorizontalChartBar = __decorate(
  [
    ProxyCmp({
      inputs: ['color', 'loading', 'maxCount', 'noLabel', 'size', 'value'],
    }),
  ],
  TpHorizontalChartBar,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TpHorizontalChartBar,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: 'tp-horizontal-chart-bar',
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: '<ng-content></ng-content>',
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ['color', 'loading', 'maxCount', 'noLabel', 'size', 'value'],
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
let TpInputContainer = class TpInputContainer {
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
      type: TpInputContainer,
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
      type: TpInputContainer,
      selector: 'tp-input-container',
      inputs: { state: 'state' },
      ngImport: i0,
      template: '<ng-content></ng-content>',
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
TpInputContainer = __decorate(
  [
    ProxyCmp({
      inputs: ['state'],
    }),
  ],
  TpInputContainer,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TpInputContainer,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: 'tp-input-container',
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: '<ng-content></ng-content>',
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ['state'],
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
let TpRateLike = class TpRateLike {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tpChange']);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: TpRateLike,
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
      type: TpRateLike,
      selector: 'tp-rate-like',
      inputs: { loading: 'loading', status: 'status' },
      ngImport: i0,
      template: '<ng-content></ng-content>',
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
TpRateLike = __decorate(
  [
    ProxyCmp({
      inputs: ['loading', 'status'],
    }),
  ],
  TpRateLike,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TpRateLike,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: 'tp-rate-like',
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: '<ng-content></ng-content>',
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ['loading', 'status'],
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

const DIRECTIVES = [
  TpAlert,
  TpChartBar,
  TpComparisonChartBar,
  TpHorizontalChartBar,
  TpInputContainer,
  TpRateLike,
];

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
      declarations: [
        TpAlert,
        TpChartBar,
        TpComparisonChartBar,
        TpHorizontalChartBar,
        TpInputContainer,
        TpRateLike,
      ],
      exports: [
        TpAlert,
        TpChartBar,
        TpComparisonChartBar,
        TpHorizontalChartBar,
        TpInputContainer,
        TpRateLike,
      ],
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

export {
  DIRECTIVES,
  TemplariosModule,
  TpAlert,
  TpChartBar,
  TpComparisonChartBar,
  TpHorizontalChartBar,
  TpInputContainer,
  TpRateLike,
};
//# sourceMappingURL=tp-angular.mjs.map
