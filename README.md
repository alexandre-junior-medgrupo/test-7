# Templarios

## Requisites

- node >= 18

## Development

```bash
npm start
```

## Production

```bash
npm run build
```

## Package Installation/Configuration

<details>
<summary><h2 style="display:inline-block; width: calc(100% - 15px)">Angular</h2></summary>

### # Installation

```bash
npm i @ionic/angular@latest ionicons@latest templarios@github:MEDGRUPOGIT/templarios.git#1.0.0
```

### # Configuration

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
@import 'templarios/angular/styles/css/templarios.css';
```

```ts
// src/app/app.module.ts

import { TemplariosModule } from 'templarios/tp-angular';

@NgModule({
  imports: [TemplariosModule],
})
export class AppModule {}
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
                "input": "node_modules/templarios/core/icons",
                "output": "./templarios"
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
                "input": "node_modules/templarios/core/icons",
                "output": "./templarios"
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
<summary><h2 style="display:inline-block; width: calc(100% - 15px)">Ionic Angular</h2></summary>

### # Installation

```bash
npm i templarios@github:MEDGRUPOGIT/templarios.git#1.0.0
```

### # Configuration

```ts
// src/main.ts

import { defineCustomElements } from 'templarios/core/loader';
defineCustomElements();
```

```scss
// src/global.scss

/* templarios */
@import 'templarios/angular/styles/css/templarios.css';
```

```ts
// src/app/app.module.ts

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

```json
// tsconfig.tsjson

{
  "compilerOptions": {
    "types": ["./node_modules/templarios/core/dist/types/interfaces.d.ts"]
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
                "input": "node_modules/templarios/core/icons",
                "output": "./templarios"
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
                "input": "node_modules/templarios/core/icons",
                "output": "./templarios"
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
