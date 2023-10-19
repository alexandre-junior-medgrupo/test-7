import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'templarios',
  plugins: [
    sass({
      injectGlobalPaths: ['./src/styles/functions/_color.functions.scss'],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'src/**/*.{svg}',
          dest: 'dist/components/assets',
          warn: true,
        },
      ],
    },
    {
      type: 'dist-custom-elements',
      copy: [
        {
          src: 'src/**/*.{svg}',
          dest: 'dist/components/assets',
          warn: true,
        },
      ],
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@templarios/core',
      outputType: 'component',
      directivesProxyFile:
        '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile:
        '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
