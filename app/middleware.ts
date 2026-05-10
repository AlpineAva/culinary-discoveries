import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Let the login page through unconditionally
  if (pathname.startsWith('/login')) {
    return NextResponse.next()
  }

  const auth = request.cookies.get('auth')?.value
  if (auth !== 'happymothersday') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Run on all routes except Next.js internals and static assets
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico).*)'],
}
