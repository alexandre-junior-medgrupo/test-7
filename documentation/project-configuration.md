# Project Configuration

<details>
<summary><h2 style="display:inline-block; width: calc(100% - 15px)">Lerna</h2></summary>

## # Installation

```bash
# <root>

npx lerna init
```

## # Configuration

```json
// package.json

{
  "name": "templarios",
  "scripts": {
    "build": "lerna run tp:build"
  }
}
```

</details>

<details>
<summary><h2 style="display:inline-block; width: calc(100% - 15px)">TypeScript</h2></summary>

## # Installation

```bash
# <root>

npm i typescript @types/node -D
```

</details>

<details>
<summary><h2 style="display:inline-block; width: calc(100% - 15px)">Stencil</h2></summary>

## # Installation

```bash
# <root>/packages

npm init stencil components core
cd core
npm install
```

## # Configuration

```json
//  <root>/packages/core/package.json
// remove "description" and "repository"

{
  "name": "@templarios/core",
  "scripts": {
    "tp:build": "stencil build --docs"
  }
}
```

```ts
// <root>/packages/core/stencil.config.ts

export const config: Config = {
  namespace: 'templarios',
};
```

```json
// <root>/packages/core/tsconfig.json

{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```

</details>
