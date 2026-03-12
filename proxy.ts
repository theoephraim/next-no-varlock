import type { NextRequest } from 'next/server';

export function proxy(_request: NextRequest) {
  console.log('proxy env vars', {
    NEXT_PUBLIC_VAR_FROM_ENV: process.env.NEXT_PUBLIC_VAR_FROM_ENV,
    VAR_FROM_ENV: process.env.VAR_FROM_ENV,
    VAR_FROM_UI: process.env.VAR_FROM_UI,
  });
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
