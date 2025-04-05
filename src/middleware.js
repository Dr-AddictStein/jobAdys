import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export function middleware(req) {
  const token = req.cookies.get('token')?.value;
  const url = req.nextUrl.clone();

  if (!token) {
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }

  try {
    verify(token, process.env.JWT_SECRET);
    return NextResponse.next();
  } catch {
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
