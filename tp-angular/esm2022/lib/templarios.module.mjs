import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from 'tp-core/loader';
import { DIRECTIVES } from './stencil-generated';
import * as i0 from '@angular/core';
import * as i1 from './stencil-generated/components';
export class TemplariosModule {
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.2.10',
      ngImport: i0,
      type: TemplariosModule,
      deps: [],
      target: i0.ɵɵFactoryTarget.NgModule,
    });
  }
  static {
    this.ɵmod = i0.ɵɵngDeclareNgModule({
      minVersion: '14.0.0',
      version: '16.2.10',
      ngImport: i0,
      type: TemplariosModule,
      declarations: [i1.TpTest],
      exports: [i1.TpTest],
    });
  }
  static {
    this.ɵinj = i0.ɵɵngDeclareInjector({
      minVersion: '12.0.0',
      version: '16.2.10',
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
  version: '16.2.10',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhcmlvcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGFyaW9zL3NyYy9saWIvdGVtcGxhcmlvcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFjakQsTUFBTSxPQUFPLGdCQUFnQjsrR0FBaEIsZ0JBQWdCO2dIQUFoQixnQkFBZ0I7Z0hBQWhCLGdCQUFnQixhQVJoQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsb0JBQW9CO2dCQUN0QyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7OzRGQUVVLGdCQUFnQjtrQkFaNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7b0JBQ3hCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLG9CQUFvQjs0QkFDdEMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnRzIH0gZnJvbSAndHAtY29yZS9sb2FkZXInO1xyXG5pbXBvcnQgeyBESVJFQ1RJVkVTIH0gZnJvbSAnLi9zdGVuY2lsLWdlbmVyYXRlZCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogWy4uLkRJUkVDVElWRVNdLFxyXG4gIGltcG9ydHM6IFtdLFxyXG4gIGV4cG9ydHM6IFsuLi5ESVJFQ1RJVkVTXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICB1c2VGYWN0b3J5OiAoKSA9PiBkZWZpbmVDdXN0b21FbGVtZW50cyxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGFyaW9zTW9kdWxlIHt9XHJcbiJdfQ==
