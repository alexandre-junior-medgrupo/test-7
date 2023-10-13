# @templarios/core

<details>
<summary><h2 style="display:inline-block; width: calc(100% - 15px)">Ionic Angular</h2></summary>

## # Installation

```bash
npm i @templarios/core@github:MEDGRUPOGIT/med-components#308956e4143252f69ab19e21c2ba91e632330f0f
```

## # Configuration

```ts
// src/main.ts

import { defineCustomElements } from '@templarios/core/loader';
defineCustomElements();
```

```scss
// src/global.scss

@import '@templarios/core/public/css/templarios.css';
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
                "input": "node_modules/@templarios/core/public/icons",
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
                "input": "node_modules/@templarios/core/public/icons",
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
<summary><h2 style="display:inline-block; width: calc(100% - 15px)">Angular</h2></summary>

## # Installation

```bash
npm i @ionic/angular@latest ionicons@latest @templarios/core@github:MEDGRUPOGIT/med-components#308956e4143252f69ab19e21c2ba91e632330f0f
```

## # Configuration

```ts
// src/main.ts

import { defineCustomElements } from '@templarios/core/loader';
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
@import '@templarios/core/public/css/templarios.css';
```

```ts
// src/app/app.module.ts

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  imports: [IonicModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
                "input": "node_modules/@templarios/core/public/icons",
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
                "input": "node_modules/@templarios/core/public/icons",
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
<summary><h2 style="display:inline-block; width: calc(100% - 15px)">React</h2></summary>
</details>

<details>
<summary><h2 style="display:inline-block; width: calc(100% - 15px)">Vue</h2></summary>
</details>

# @templarios/angular

# @templarios/react

# @templarios/vue
