import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const NEXT_PUBLIC_DOMAIN = "localhost:3000"
    const url = req.nextUrl.clone();
    const searchParams = url.searchParams.toString();
    const hostname = req.headers.get("host");
    const pathWithSearchParams = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""
        }`;

    if (url.pathname.startsWith('/_next') ||
        url.pathname.startsWith('/api') ||
        url.pathname.includes('.')) {
        return NextResponse.next();
    }

    const customSubDomain = hostname
        ?.split(`${NEXT_PUBLIC_DOMAIN}`)
        .filter(Boolean)[0];

    if (customSubDomain) {
        return NextResponse.rewrite(
            new URL(`/${customSubDomain.slice(0, -1)}${pathWithSearchParams}`, req.url)
        );
    }

    return NextResponse.rewrite(url);
}