import { __decorate } from 'tslib';
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
import * as i0 from '@angular/core';
export let TpAlert = class TpAlert {
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
export let TpButtonCluster = class TpButtonCluster {
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
      type: TpButtonCluster,
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
      type: TpButtonCluster,
      selector: 'tp-button-cluster',
      inputs: { collapsed: 'collapsed', color: 'color', loading: 'loading' },
      ngImport: i0,
      template: '<ng-content></ng-content>',
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
TpButtonCluster = __decorate(
  [
    ProxyCmp({
      inputs: ['collapsed', 'color', 'loading'],
      methods: ['toggle'],
    }),
  ],
  TpButtonCluster,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TpButtonCluster,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: 'tp-button-cluster',
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: '<ng-content></ng-content>',
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ['collapsed', 'color', 'loading'],
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
export let TpChartBar = class TpChartBar {
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
export let TpChartRadial = class TpChartRadial {
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
      type: TpChartRadial,
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
      type: TpChartRadial,
      selector: 'tp-chart-radial',
      inputs: { color: 'color', items: 'items', size: 'size' },
      ngImport: i0,
      template: '<ng-content></ng-content>',
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
TpChartRadial = __decorate(
  [
    ProxyCmp({
      inputs: ['color', 'items', 'size'],
    }),
  ],
  TpChartRadial,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TpChartRadial,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: 'tp-chart-radial',
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: '<ng-content></ng-content>',
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ['color', 'items', 'size'],
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
export let TpComparisonChartBar = class TpComparisonChartBar {
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
export let TpHorizontalChartBar = class TpHorizontalChartBar {
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
export let TpInputContainer = class TpInputContainer {
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
      inputs: { color: 'color', state: 'state' },
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
      inputs: ['color', 'state'],
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
          inputs: ['color', 'state'],
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
export let TpLoader = class TpLoader {
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
      type: TpLoader,
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
      type: TpLoader,
      selector: 'tp-loader',
      inputs: { color: 'color', fixed: 'fixed', tpName: 'tpName' },
      ngImport: i0,
      template: '<ng-content></ng-content>',
      isInline: true,
      changeDetection: i0.ChangeDetectionStrategy.OnPush,
    });
  }
};
TpLoader = __decorate(
  [
    ProxyCmp({
      inputs: ['color', 'fixed', 'tpName'],
    }),
  ],
  TpLoader,
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: TpLoader,
  decorators: [
    {
      type: Component,
      args: [
        {
          selector: 'tp-loader',
          changeDetection: ChangeDetectionStrategy.OnPush,
          template: '<ng-content></ng-content>',
          // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
          inputs: ['color', 'fixed', 'tpName'],
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
export let TpRateLike = class TpRateLike {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXJpb3Mvc3JjL2xpYi9zdGVuY2lsLWdlbmVyYXRlZC9jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQkFBb0I7QUFDcEIsOENBQThDO0FBQzlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUV4SCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQWVoRSxXQUFNLE9BQU8sR0FBYixNQUFNLE9BQU87SUFFbEIsWUFBWSxDQUFvQixFQUFFLENBQWEsRUFBWSxDQUFTO1FBQVQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNsRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzsrR0FMVSxPQUFPO21HQUFQLE9BQU8sa0pBSlIsMkJBQTJCOztBQUkxQixPQUFPO0lBVm5CLFFBQVEsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUM7S0FDekQsQ0FBQztHQVFXLE9BQU8sQ0FNbkI7NEZBTlksT0FBTztrQkFQbkIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHVFQUF1RTtvQkFDdkUsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQztpQkFDekQ7O0FBd0JNLFdBQU0sZUFBZSxHQUFyQixNQUFNLGVBQWU7SUFFMUIsWUFBWSxDQUFvQixFQUFFLENBQWEs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QztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHVFQUF1RTtvQkFDdkUsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7aUJBQ3JDOztBQXVCTSxXQUFNLFVBQVUsR0FBaEIsTUFBTSxVQUFVO0lBRXJCLFlBQVksQ0FBb0IsRUFBRSxDQUFhLEVBQVksQ0FBUztRQUFULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFDbEUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQzFCLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQzsrR0FOVSxVQUFVO21HQUFWLFVBQVUsc0dBSlgsMkJBQTJCOztBQUkxQixVQUFVO0lBVnRCLFFBQVEsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7S0FDOUIsQ0FBQztHQVFXLFVBQVUsQ0FPdEI7NEZBUFksVUFBVTtrQkFQdEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHVFQUF1RTtvQkFDdkUsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztpQkFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogYXV0by1nZW5lcmF0ZWQgYW5ndWxhciBkaXJlY3RpdmUgcHJveGllcyAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByb3h5Q21wLCBwcm94eU91dHB1dHMgfSBmcm9tICcuL2FuZ3VsYXItY29tcG9uZW50LWxpYi91dGlscyc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICd0cC1jb3JlJztcblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sb3InLCAnaWNvbicsICdsb2FkaW5nJywgJ21lc3NhZ2UnLCAnc3RhdGUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RwLWFsZXJ0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydjb2xvcicsICdpY29uJywgJ2xvYWRpbmcnLCAnbWVzc2FnZScsICdzdGF0ZSddLFxufSlcbmV4cG9ydCBjbGFzcyBUcEFsZXJ0IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgVHBBbGVydCBleHRlbmRzIENvbXBvbmVudHMuVHBBbGVydCB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xsYXBzZWQnLCAnY29sb3InLCAnbG9hZGluZyddLFxuICBtZXRob2RzOiBbJ3RvZ2dsZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHAtYnV0dG9uLWNsdXN0ZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2NvbGxhcHNlZCcsICdjb2xvcicsICdsb2FkaW5nJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRwQnV0dG9uQ2x1c3RlciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFRwQnV0dG9uQ2x1c3RlciBleHRlbmRzIENvbXBvbmVudHMuVHBCdXR0b25DbHVzdGVyIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2hlaWdodCcsICdsb2FkaW5nJywgJ25vTGFiZWwnLCAndmFsdWUnLCAnd2lkdGgnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RwLWNoYXJ0LWJhcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnY29sb3InLCAnaGVpZ2h0JywgJ2xvYWRpbmcnLCAnbm9MYWJlbCcsICd2YWx1ZScsICd3aWR0aCddLFxufSlcbmV4cG9ydCBjbGFzcyBUcENoYXJ0QmFyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgVHBDaGFydEJhciBleHRlbmRzIENvbXBvbmVudHMuVHBDaGFydEJhciB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xvcicsICdpdGVtcycsICdzaXplJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cC1jaGFydC1yYWRpYWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2l0ZW1zJywgJ3NpemUnXSxcbn0pXG5leHBvcnQgY2xhc3MgVHBDaGFydFJhZGlhbCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFRwQ2hhcnRSYWRpYWwgZXh0ZW5kcyBDb21wb25lbnRzLlRwQ2hhcnRSYWRpYWwge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYmFyVmFsdWUnLCAnY29sb3InLCAnY29udGFpbmVySGVpZ2h0JywgJ2Rpc2FibGVkJywgJ2hhc01hcmtlcicsICdsb2FkaW5nJywgJ21hcmtlclZhbHVlJywgJ25vTGFiZWwnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RwLWNvbXBhcmlzb24tY2hhcnQtYmFyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydiYXJWYWx1ZScsICdjb2xvcicsICdjb250YWluZXJIZWlnaHQnLCAnZGlzYWJsZWQnLCAnaGFzTWFya2VyJywgJ2xvYWRpbmcnLCAnbWFya2VyVmFsdWUnLCAnbm9MYWJlbCddLFxufSlcbmV4cG9ydCBjbGFzcyBUcENvbXBhcmlzb25DaGFydEJhciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFRwQ29tcGFyaXNvbkNoYXJ0QmFyIGV4dGVuZHMgQ29tcG9uZW50cy5UcENvbXBhcmlzb25DaGFydEJhciB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xvcicsICdsb2FkaW5nJywgJ21heENvdW50JywgJ25vTGFiZWwnLCAnc2l6ZScsICd2YWx1ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHAtaG9yaXpvbnRhbC1jaGFydC1iYXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2xvYWRpbmcnLCAnbWF4Q291bnQnLCAnbm9MYWJlbCcsICdzaXplJywgJ3ZhbHVlJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRwSG9yaXpvbnRhbENoYXJ0QmFyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgVHBIb3Jpem9udGFsQ2hhcnRCYXIgZXh0ZW5kcyBDb21wb25lbnRzLlRwSG9yaXpvbnRhbENoYXJ0QmFyIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ3N0YXRlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cC1pbnB1dC1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ3N0YXRlJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRwSW5wdXRDb250YWluZXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBUcElucHV0Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50cy5UcElucHV0Q29udGFpbmVyIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2ZpeGVkJywgJ3RwTmFtZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHAtbG9hZGVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydjb2xvcicsICdmaXhlZCcsICd0cE5hbWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgVHBMb2FkZXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBUcExvYWRlciBleHRlbmRzIENvbXBvbmVudHMuVHBMb2FkZXIge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnbG9hZGluZycsICdzdGF0dXMnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RwLXJhdGUtbGlrZScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnbG9hZGluZycsICdzdGF0dXMnXSxcbn0pXG5leHBvcnQgY2xhc3MgVHBSYXRlTGlrZSB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ3RwQ2hhbmdlJ10pO1xuICB9XG59XG5cblxuaW1wb3J0IHR5cGUgeyBUcFJhdGVMaWtlVHlwZSBhcyBJVHBSYXRlTGlrZVRwUmF0ZUxpa2VUeXBlIH0gZnJvbSAndHAtY29yZSc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBUcFJhdGVMaWtlIGV4dGVuZHMgQ29tcG9uZW50cy5UcFJhdGVMaWtlIHtcbiAgLyoqXG4gICAqIEVtaXRpZG8gcXVhbmRvIGEgcHJvcHJpZWRhZGUgc3RhdHVzIMOpIGFsdGVyYWRhLlxuICAgKi9cbiAgdHBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxJVHBSYXRlTGlrZVRwUmF0ZUxpa2VUeXBlWydzdGF0dXMnXT4+O1xufVxuXG5cbiJdfQ==
