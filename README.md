# Templarios

**[Lerna](https://lerna.js.org/) monorepo** contendo as releases do **Templarios Design System**.

## # Release Ionic 7

- **[`Storybook Link`](http://desenv.ordomederi.com/templarios/release-7)**

> Aplicações onde **Templarios 7** está sendo utilizado:

- **[`Aplicação X (link do repo)`]()**

## # Release Ionic 6

- **[`Storybook Link`](http://desenv.ordomederi.com/templarios/release-6)**

> Aplicações onde **Templarios 6** está sendo utilizado:

- **[`Aplicação Y (link do repo)`]()**

<details>
<summary><h2 style="display:inline-block; width: calc(100% - 15px)">Monorepo</h2></summary>

## # Development

```bash
npm start
```

## # Publish

### # Release 7

#### # Step 1

```bash
# packages/core

npm uninstall @ionic/core
```

```bash
# packages/core

npm i @ionic/core@latest -D
```

```bash
# root

npm run build:7
```

#### # Step 2

- Publicar storybook

### # Release 6

#### # Step 1

```bash
# packages/core

npm uninstall @ionic/core
```

```bash
# packages/core

npm i @ionic/core@v6-lts -D
```

#### # Step 2

```ts
// packages/core/.storybook/preview.ts

const preview: Preview = {
  parameters: {
    themes: {
      list: [...list6],
    },
  },
};
```

#### # Step 3

```bash
# root

npm run build:6
```

#### # Step 4

- Renomear o arquivo `package-publish.json` para `package.json`.
- Renomear o arquivo `package.json` para `bkp.json`.

#### # Step 5

- Gerar tag

#### # Step 6

- Reverter files `package.json` e `package-publish.json`.
- Reverter files `packages/core/.storybook/preview.ts`.
- Reverter files `ionic 7`.

</details>

## # Packages Installation/Configuration

<details>
<summary><h2 style="display:inline-block; width: calc(100% - 15px)">Ionic Angular</h2></summary>

### # Installation

```bash
npm i templarios@github:MEDGRUPOGIT/templarios.git#1.0.0
```

#### # Release 7

```bash
npm uninstall @ionic/core @ionic/angular
```

```bash
npm install @ionic/core@latest @ionic/angular@latest
```

#### # Release 6

```bash
npm uninstall @ionic/core @ionic/angular
```

```bash
npm install @ionic/core@v6-lts @ionic/angular@v6-lts
```

### # Configuration

```ts
// src/main.ts

import { defineCustomElements } from 'templarios/release-{7,6}/core/loader';
defineCustomElements();
```

```scss
// src/global.scss

/* templarios */
@import 'templarios/release-{7,6}/angular/styles/css/templarios.css';
```

```ts
// src/app/app.module.ts

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TemplariosModule } from 'templarios/release-{7,6}/angular';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [TemplariosModule],
})
export class AppModule {}
```

```json
// tsconfig.json

{
  "compilerOptions": {
    "types": [
      "./node_modules/templarios/release-{7,6}/core/dist/types/interfaces.d.ts"
    ]
  }
}
```

```json
// angular.json

{
  "projects": {
    "app-angular": {
      "architect": {
        "build": {
          "options": {
            "assets": [
              {
                "glob": "**/*.svg",
                "input": "node_modules/templarios/release-{7,6}/core/icons",
                "output": "./assets"
              }
            ],
            "stylePreprocessorOptions": {
              "includePaths": ["node_modules"]
            }
          }
        },
        "test": {
          "options": {
            "assets": [
              {
                "glob": "**/*.svg",
                "input": "node_modules/templarios/release-{7,6}/core/icons",
                "output": "./assets"
              }
            ]
          }
        }
      }
    }
  }
}
```

</details>

<details>
<summary><h2 style="display:inline-block; width: calc(100% - 15px)">Angular</h2></summary>

### # Installation

```bash
npm i templarios@github:MEDGRUPOGIT/templarios.git#1.0.0
```

#### # Release 7

```bash
npm install @ionic/core@latest @ionic/angular@latest
```

#### # Release 6

```bash
npm install @ionic/core@v6-lts @ionic/angular@v6-lts
```

### # Configuration

```ts
// src/main.ts

import { defineCustomElements } from 'templarios/release-{7,6}/core/loader';
defineCustomElements();
```

```scss
// src/styles.scss

/* ionic */
@import '@ionic/angular/css/core.css';
@import '@ionic/angular/css/normalize.css';
@import '@ionic/angular/css/structure.css';
@import '@ionic/angular/css/typography.css';
@import '@ionic/angular/css/display.css';
@import '@ionic/angular/css/padding.css';
@import '@ionic/angular/css/float-elements.css';
@import '@ionic/angular/css/text-alignment.css';
@import '@ionic/angular/css/text-transformation.css';
@import '@ionic/angular/css/flex-utils.css';

/* templarios */
@import 'templarios/release-{7,6}/angular/styles/css/templarios.css';
```

```ts
// src/app/app.module.ts

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TemplariosModule } from 'templarios/release-{7,6}/angular';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [TemplariosModule],
})
export class AppModule {}
```

```json
// tsconfig.json

{
  "compilerOptions": {
    "types": [
      "./node_modules/templarios/release-{7,6}/core/dist/types/interfaces.d.ts"
    ]
  }
}
```

```json
// angular.json

{
  "projects": {
    "app-angular": {
      "architect": {
        "build": {
          "options": {
            "assets": [
              {
                "glob": "**/*.svg",
                "input": "node_modules/templarios/release-{7,6}/core/icons",
                "output": "./assets"
              }
            ],
            "stylePreprocessorOptions": {
              "includePaths": ["node_modules"]
            }
          }
        },
        "test": {
          "options": {
            "assets": [
              {
                "glob": "**/*.svg",
                "input": "node_modules/templarios/release-{7,6}/core/icons",
                "output": "./assets"
              }
            ]
          }
        }
      }
    }
  }
}
```

</details>
