# @templarios/core

<details>
<summary><h2 style="display:inline-block; width: calc(100% - 15px)">Angular</h2></summary>

## Installation

```bash
npm i @templarios/core:@github:MEDGRUPOGIT/med-components#0c847bad2456d947cb089f55dd0aea8c4fdabc12
```

## Configuration

```ts
// src/main.ts

import { defineCustomElements } from '@templarios/core/loader';
defineCustomElements();
```

```scss
// src/styles.scss

@import '@templarios/core/css/templarios.css';
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
                "input": "node_modules/@templarios/core/icons",
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
