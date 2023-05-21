import Image from 'next/image';
import styles from './page.module.css';

import { Black_Han_Sans } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const black_Han_Sans = Black_Han_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
});

export default function Home() {
    return (
        <div className='logo'>
            <img src='/icon.svg' width='150' height='150' />
        </div>
    );
}
