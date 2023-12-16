const replace = require('replace-in-file');

const angular1 = {
  files: 'release-7/angular/esm2022/lib/templarios.module.mjs',
  from: /tp-core/g,
  to: '../../../core',
};

const angular2 = {
  files: [
    'release-7/angular/fesm2022/tp-angular.mjs',
    'release-7/angular/fesm2022/tp-angular.mjs.map',
  ],
  from: /tp-core/g,
  to: '../../core',
};

const angular3 = {
  files: 'release-7/angular/lib/stencil-generated/components.d.ts',
  from: /tp-core/g,
  to: '../../../core/dist/types',
};

replace(angular1)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });

replace(angular2)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });

replace(angular3)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
