import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { defaultLocale } from '../lib/i18n';

export default getRequestConfig(async () => {
  const locale = defaultLocale;

  try {
    return {
      locale,
      messages: (await import(`../metadata/${locale}.json`)).default,
    };
  } catch (error) {
    notFound();
  }
});
