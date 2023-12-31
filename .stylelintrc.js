module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-rational-order',
  ],
  rules: {
    'selector-no-qualifying-type': null,
    'max-nesting-depth': null,
    'at-rule-disallowed-list': null,
    'selector-class-pattern': [
      '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
      {
        resolveNestedSelectors: true,
        message: (selectorValue) => {
          return `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css.`;
        },
      },
    ],
  },
};
