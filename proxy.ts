import type { NextRequest } from 'next/server';

export function proxy(_request: NextRequest) {
  console.log('proxy env vars', {
    VAR_FROM_ENV: process.env.VAR_FROM_ENV,
  });
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
