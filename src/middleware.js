import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/auth/login' || path === '/auth/registration';
  
  // Get stored user data from cookies
  const userData = request.cookies.get('user')?.value;
  
  // If no user data and trying to access protected routes
  if (!userData && !isPublicPath) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  
  // If user data exists and trying to access auth pages
  if (userData && isPublicPath) {
    // Parse user data to get role
    try {
      const user = JSON.parse(userData);
      const role = user.role?.toLowerCase();
      
      // Redirect to appropriate dashboard
      switch (role) {
        case 'admin':
          return NextResponse.redirect(new URL('/admin', request.url));
        case 'submitter':
          return NextResponse.redirect(new URL('/submitter', request.url));
        case 'performer':
          return NextResponse.redirect(new URL('/performer', request.url));
        default:
          return NextResponse.redirect(new URL('/', request.url));
      }
    } catch (error) {
      // If JSON parsing fails, clear the cookie and proceed
      const response = NextResponse.next();
      response.cookies.delete('user');
      return response;
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/admin/:path*',
    '/submitter/:path*',
    '/performer/:path*',
    '/auth/login',
    '/auth/registration',
  ],
};
