export const locales = ['en', 'pt-BR'] as const;
export const defaultLocale = 'pt-BR';

export type Locale = (typeof locales)[number];
