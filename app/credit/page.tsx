import Image from 'next/image';
import { Noto_Sans_KR } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const noto_sans = Noto_Sans_KR({
    subsets: ['latin'],
    display: 'swap',
    weight: '500',
});

// If loading a variable font, you don't need to specify the font weight
const noto_sans_light = Noto_Sans_KR({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
});

//날짜 정의

export default function Page() {
    return (
        <div>
            <img className='main-logo' src='/icon.svg' width='50vw' />
            <div className='main-border'>
                <span className={`date-text ${noto_sans.className}`}>오늘죽전 프로젝트</span>
                <a href='https://github.com/Bluebear645/Today-Jukjeon' className='gitrepo'>
                    <img className='github' src='/github-mark.svg' width='50vw' />
                    <span className={`github-text ${noto_sans_light.className}`}>깃허브 리포지토리</span>
                </a>
            </div>
        </div>
    );
}
