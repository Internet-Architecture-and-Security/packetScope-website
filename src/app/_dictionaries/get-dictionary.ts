import 'server-only'
import type EnglishLocale from './en'

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'zh']
} as const

export type Locale = (typeof i18n)['locales'][number]

export type Dictionary = typeof EnglishLocale

export type Dictionaries = Record<
  Locale,
  () => Promise<{ default: Dictionary }>
>

// We enumerate all dictionaries here for better linting and TypeScript support
// We also get the default import for cleaner types
const dictionaries: Dictionaries = {
  en: () => import('./en'),
  zh: () => import('./zh'),
}

export async function getDictionary(locale: string): Promise<Dictionary> {
  const { default: dictionary } = await // @ts-expect-error -- fixme
  (dictionaries[locale] || dictionaries.en)()

  return dictionary
}

export function getDirection(locale: string): 'ltr' | 'rtl' {
  return locale === 'es' ? 'rtl' : 'ltr'
}