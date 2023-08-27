import Image from 'next/image';
import styles from './page.module.css';
import MenuList from './components/MenuList';
import Notification from './components/notification';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
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

export default function Home() {
    return (
        <div>
            <img className='main-logo' src='/icon.svg' width='50vw' />
            <div className='main-border'>
                <div className='box'>
                    <MenuList />
                </div>
                <Notification />
            </div>
            <ToastContainer />
        </div>
    );
}
