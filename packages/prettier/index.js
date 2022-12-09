// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.ts',
      options: {
        parser: 'typescript',
      },
    },
  ],
}
