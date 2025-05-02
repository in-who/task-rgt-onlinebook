// middleware.js (수정 후)
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // 추가 로직 필요 시 여기에 작성
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // 인증 여부 확인
    },
    pages: {
      signIn: "/auth/login", // 인증 실패 시 리디렉션 경로
    },
  }
);

export const config = {
  matcher: ["/Dashboard"], // 대소문자 구분 주의
};
