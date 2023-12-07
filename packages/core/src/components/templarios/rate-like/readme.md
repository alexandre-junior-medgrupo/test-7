# tp-rate-like

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                    | Type                  | Default     |
| --------- | --------- | ---------------------------------------------- | --------------------- | ----------- |
| `loading` | `loading` | Define o estado de carregamento do componente. | `boolean`             | `undefined` |
| `status`  | `status`  | Define o status do componente.                 | `"dislike" \| "like"` | `undefined` |


## Events

| Event      | Description                                     | Type                               |
| ---------- | ----------------------------------------------- | ---------------------------------- |
| `tpChange` | Emitido quando a propriedade status é alterada. | `CustomEvent<"dislike" \| "like">` |


## CSS Custom Properties

| Name                           | Description                                        |
| ------------------------------ | -------------------------------------------------- |
| `--tp-skeleton-background-rgb` | Define o background rgb do skeleton do componente. |
| `--tp-skeleton-height`         | Define a altura do skeleton do componente.         |
| `--tp-skeleton-width`          | Define a largura do skeleton do componente.        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
