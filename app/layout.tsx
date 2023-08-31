import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Hamburger from './components/hamburger';

export const metadata = {
    title: '오늘죽전',
    description: '죽전고등학교 ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <meta name='naver-site-verification' content='e6954e9cc5fc4fd216744d37ecd0bf7e76cb8e48' />
            <body>
                {children}
                {/* <Hamburger /> */}
            </body>

            <Analytics />
        </html>
    );
}
