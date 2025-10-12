import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/lib/i18n';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/pt-BR/')) {
    const newPath = pathname.replace(/^\/pt-BR/, '') || '/';
    return NextResponse.redirect(new URL(newPath, request.url));
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
