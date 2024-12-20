'use client';

import '@/styles/globals.scss';
import { Providers } from '@/components/providers';
import SkipNav from '@/components/layout/header/SkipNav';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>삼성SDI(SAMSUNG SDI)</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="삼성SDI (SAMSUNG SDI)" />
                <meta
                    property="og:description"
                    content="삼성SDI 대표사이트에 오신 걸 환영합니다. 리튬이온 2차 전지, 자동차용 전지, ESS, 전자재료 사업소개"
                />
                <meta property="og:image" content="http://www.mysite.com/article/article1_featured_image.jpg" />
                <meta property="og:url" content="http://www.mysite.com/article/article1.html" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="삼성SDI" />
                <meta
                    name="twitter:description"
                    content="삼성SDI 대표사이트에 오신 걸 환영합니다. 리튬이온 2차 전지, 자동차용 전지, ESS, 전자재료 사업소개"
                />
                <meta name="twitter:image" content="http://www.mysite.com/article/article1.html" />
                <meta
                    name="twitter:domain"
                    content="삼성SDI 대표사이트에 오신 걸 환영합니다. 리튬이온 2차 전지, 자동차용 전지, ESS, 전자재료 사업소개"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
                />
            </head>
            <body>
                <Providers>
                    <SkipNav />
                    <Header /> {/* 공통 Header */}
                    <main>{children}</main> {/* 각 페이지 콘텐츠 */}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
