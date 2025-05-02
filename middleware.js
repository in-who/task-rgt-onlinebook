// middleware.js (수정 후)
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
    const token = await getToken({ req });
  
    if (!token) {
      if (req.nextUrl.pathname.startsWith('/Dashboard')) {
        const url = req.nextUrl.clone();
        url.pathname = '/auth/login';
        return NextResponse.redirect(url);
      }
    }
  
    return NextResponse.next();
  }
  
  export const config = {
    matcher: ['/Dashboard/:path*'],
  };