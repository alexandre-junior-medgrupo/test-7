# Templarios

**[Lerna](https://lerna.js.org/) monorepo** contendo as releases do **Templarios Design System**.

<details>
<summary><h2 style="display:inline-block; width: calc(100% - 15px)">Monorepo</h2></summary>

## # Development

```bash
npm start
```

## # Production

### # Release 7

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

### # Release 6

```bash
# packages/core

npm uninstall @ionic/core
```

```bash
# packages/core

npm i @ionic/core@v6-lts -D
```

```bash
# root

npm run build:6
```

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
