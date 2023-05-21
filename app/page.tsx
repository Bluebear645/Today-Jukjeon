import Image from 'next/image';
import styles from './page.module.css';
import axios from 'axios';

import { Noto_Sans_KR } from 'next/font/google';
import { json } from 'stream/consumers';
import { date } from 'random-js';

// If loading a variable font, you don't need to specify the font weight
const noto_sans = Noto_Sans_KR({
    subsets: ['latin'],
    display: 'swap',
    weight: '500',
});

const today = new Date();

export default function Home() {
    async function fetchData() {
        const url = `https://school-api.xyz/api/high/J100000801?date=${today.getDate()}&allergy=hidden`;
        try {
            const response = await axios.get(url);
            const data = response.data;
            const lunch = data.menu[0].lunch.map((item: string) => item.replace(/^j/, ''));
            console.log(lunch);
            return lunch;
        } catch (error) {
            return error;
        }
    }
    fetchData();
    return (
        <div>
            <img className='main-logo' src='/icon.svg' width='50vw' />
            <div className='main-border'>
                <div className='box'>
                    <div className='date'>
                        <span className={`date-text ${noto_sans.className}`}>
                            {today.getFullYear()}.{today.getMonth() + 1}.{today.getDate()} {new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(today)}
                        </span>
                    </div>
                    <div className='lunch'>
                        <span className={`lunch-text ${noto_sans.className}`}>
                            <></>
                        </span>
                    </div>
                </div>
            </div>
            {/* <div className='card'></div> */}
        </div>
    );
}
