import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/i18n/config";

function pathnameHasLocale(pathname: string): boolean {
  return locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    /\.[^/]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (!pathnameHasLocale(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname =
      pathname === "/"
        ? `/${defaultLocale}`
        : `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  const first = pathname.split("/").filter(Boolean)[0];
  const locale = isLocale(first) ? first : defaultLocale;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
