import type { FlatESLintConfigItem, OptionsOverrides } from '../types'
import { pluginTailwindCss } from '../plugins'

export function tailwindcss(options: OptionsOverrides): FlatESLintConfigItem[] {
  const {
    overrides = {},
  } = options
  return [
    {
      name: 'sncat:tailwind',
      plugins: {
        tailwindcss: pluginTailwindCss,
      },
      rules: {
        'tailwindcss/classnames-order': 'error',
        'tailwindcss/no-contradicting-classname': 'error',
        ...overrides,
      },
    },
  ]
}
