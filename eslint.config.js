import sortKeys from 'eslint-plugin-sort-keys'
import styleMigrate from '@stylistic/eslint-plugin-migrate'
import sncat from './dist/index.js'

export default sncat(
  {
    vue: true,
    typescript: true,
    ignores: [
      'fixtures',
      '_fixtures',
    ],
    // typescript: {
    //   tsconfigPath: 'tsconfig.json',
    // },
  },
  {
    files: ['src/**/*.ts'],
    plugins: {
      'sort-keys': sortKeys,
    },
    rules: {
      'sort-keys/sort-keys-fix': 'error',
    },
  },
  {
    files: ['src/configs/*.ts'],
    plugins: {
      'style-migrate': styleMigrate,
    },
    rules: {
      'style-migrate/migrate': ['error', { namespaceTo: 'style' }],
    },
  },
)
