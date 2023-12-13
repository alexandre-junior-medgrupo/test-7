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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RlbXBsYXJpb3Mvc3JjL2xpYi9zdGVuY2lsLWdlbmVyYXRlZC9jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQkFBb0I7QUFDcEIsOENBQThDO0FBQzlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUV4SCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQWVoRSxXQUFNLE9BQU8sR0FBYixNQUFNLE9BQU87SUFFbEIsWUFBWSxDQUFvQixFQUFFLENBQWEsRUFBWSxDQUFTO1FBQVQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNsRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzsrR0FMVSxPQUFPO21HQUFQLE9BQU8sa0pBSlIsMkJBQTJCOztBQUkxQixPQUFPO0lBVm5CLFFBQVEsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUM7S0FDekQsQ0FBQztHQVFXLE9BQU8sQ0FNbkI7NEZBTlksT0FBTztrQkFQbkIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHVFQUF1RTtvQkFDdkUsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQztpQkFDekQ7O0FBdUJNLFdBQU0sVUFBVSxHQUFoQixNQUFNLFVBQVU7SUFFckIsWUFBWSxDQUFvQixFQUFFLENBQWEs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O29CQUNyQyx1RUFBdUU7b0JBQ3ZFLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7aUJBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGF1dG8tZ2VuZXJhdGVkIGFuZ3VsYXIgZGlyZWN0aXZlIHByb3hpZXMgKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcm94eUNtcCwgcHJveHlPdXRwdXRzIH0gZnJvbSAnLi9hbmd1bGFyLWNvbXBvbmVudC1saWIvdXRpbHMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAndHAtY29yZSc7XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2ljb24nLCAnbG9hZGluZycsICdtZXNzYWdlJywgJ3N0YXRlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cC1hbGVydCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnY29sb3InLCAnaWNvbicsICdsb2FkaW5nJywgJ21lc3NhZ2UnLCAnc3RhdGUnXSxcbn0pXG5leHBvcnQgY2xhc3MgVHBBbGVydCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFRwQWxlcnQgZXh0ZW5kcyBDb21wb25lbnRzLlRwQWxlcnQge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sb3InLCAnaGVpZ2h0JywgJ2xvYWRpbmcnLCAnbm9MYWJlbCcsICd2YWx1ZScsICd3aWR0aCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHAtY2hhcnQtYmFyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydjb2xvcicsICdoZWlnaHQnLCAnbG9hZGluZycsICdub0xhYmVsJywgJ3ZhbHVlJywgJ3dpZHRoJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRwQ2hhcnRCYXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBUcENoYXJ0QmFyIGV4dGVuZHMgQ29tcG9uZW50cy5UcENoYXJ0QmFyIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2JhclZhbHVlJywgJ2NvbG9yJywgJ2NvbnRhaW5lckhlaWdodCcsICdkaXNhYmxlZCcsICdoYXNNYXJrZXInLCAnbG9hZGluZycsICdtYXJrZXJWYWx1ZScsICdub0xhYmVsJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cC1jb21wYXJpc29uLWNoYXJ0LWJhcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYmFyVmFsdWUnLCAnY29sb3InLCAnY29udGFpbmVySGVpZ2h0JywgJ2Rpc2FibGVkJywgJ2hhc01hcmtlcicsICdsb2FkaW5nJywgJ21hcmtlclZhbHVlJywgJ25vTGFiZWwnXSxcbn0pXG5leHBvcnQgY2xhc3MgVHBDb21wYXJpc29uQ2hhcnRCYXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBUcENvbXBhcmlzb25DaGFydEJhciBleHRlbmRzIENvbXBvbmVudHMuVHBDb21wYXJpc29uQ2hhcnRCYXIge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sb3InLCAnbG9hZGluZycsICdtYXhDb3VudCcsICdub0xhYmVsJywgJ3NpemUnLCAndmFsdWUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RwLWhvcml6b250YWwtY2hhcnQtYmFyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydjb2xvcicsICdsb2FkaW5nJywgJ21heENvdW50JywgJ25vTGFiZWwnLCAnc2l6ZScsICd2YWx1ZSddLFxufSlcbmV4cG9ydCBjbGFzcyBUcEhvcml6b250YWxDaGFydEJhciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFRwSG9yaXpvbnRhbENoYXJ0QmFyIGV4dGVuZHMgQ29tcG9uZW50cy5UcEhvcml6b250YWxDaGFydEJhciB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xvcicsICdzdGF0ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHAtaW5wdXQtY29udGFpbmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydjb2xvcicsICdzdGF0ZSddLFxufSlcbmV4cG9ydCBjbGFzcyBUcElucHV0Q29udGFpbmVyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgVHBJbnB1dENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudHMuVHBJbnB1dENvbnRhaW5lciB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydsb2FkaW5nJywgJ3N0YXR1cyddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHAtcmF0ZS1saWtlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydsb2FkaW5nJywgJ3N0YXR1cyddLFxufSlcbmV4cG9ydCBjbGFzcyBUcFJhdGVMaWtlIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsndHBDaGFuZ2UnXSk7XG4gIH1cbn1cblxuXG5pbXBvcnQgdHlwZSB7IFRwUmF0ZUxpa2VUeXBlIGFzIElUcFJhdGVMaWtlVHBSYXRlTGlrZVR5cGUgfSBmcm9tICd0cC1jb3JlJztcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFRwUmF0ZUxpa2UgZXh0ZW5kcyBDb21wb25lbnRzLlRwUmF0ZUxpa2Uge1xuICAvKipcbiAgICogRW1pdGlkbyBxdWFuZG8gYSBwcm9wcmllZGFkZSBzdGF0dXMgw6kgYWx0ZXJhZGEuXG4gICAqL1xuICB0cENoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PElUcFJhdGVMaWtlVHBSYXRlTGlrZVR5cGVbJ3N0YXR1cyddPj47XG59XG5cblxuIl19
