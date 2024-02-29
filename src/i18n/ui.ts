import enKeys from './locale/en'
import esKeys from './locale/en'

import { additionalConfig } from 'astro.config.mjs'

export const languages = {
    'en': 'English',
    'es': 'Español'
}

export const defaultLang: keyof typeof languages = additionalConfig.defaultLocale as keyof typeof languages

export const ui = {
    en: enKeys,
    es: esKeys,
} as const