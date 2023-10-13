# @templarios/core

<details>
<summary><h2 style="display:inline-block; width: calc(100% - 15px)">Angular</h2></summary>

## Installation

```bash
npm i @templarios/core@github:MEDGRUPOGIT/med-components#a863983e8a97324632016a74759072d4c503fe41
```

## Configuration

```ts
// src/main.ts

import { defineCustomElements } from '@templarios/core/loader';
defineCustomElements();
```

```scss
// src/styles.scss

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
                "output": "./svg"
              }
            ],
            "stylePreprocessorOptions": {
              "includePaths": ["node_modules"]
            }
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
