import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Hamburger from './components/hamburger';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: '오늘죽전',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                {children}
                {/* <Hamburger /> */}
            </body>

            <Analytics />
        </html>
    );
}
