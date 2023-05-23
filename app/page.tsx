import Image from 'next/image';
import styles from './page.module.css';
import axios from 'axios';
import xml2js from 'xml2js';

import { Noto_Sans_KR } from 'next/font/google';
import { json } from 'stream/consumers';
import { exp } from 'mathjs';

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

const today = new Date();

export default function Home() {
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
                        {lunchmenu.then((menu: string[]) =>
                            menu.map((item: string, index: number) => (
                                <span className={`lunch-text ${noto_sans.className}`}>
                                    {index + 1}. {item}
                                    <br></br>
                                </span>
                            ))
                        )}
                        <span className={`kcal-text ${noto_sans_light.className}`}>{fetchKcal()}</span>
                    </div>
                </div>
                <div className='img-icon'></div>
                <span className={`img-text ${noto_sans_light.className}`}>사진</span>
            </div>
            {/* <div className='card'></div> */}
        </div>
    );
}

export async function fetchData() {
    const url = `https://school-api.xyz/api/high/J100000801?date=${today.getDate()}&allergy=hidden`;
    try {
        const response = await axios.get(url);
        const data = response.data;
        const lunch = data.menu[0].lunch.map((item: string) => item.replace(/^j/, ''));
        return lunch;
    } catch (error) {
        return error;
    }
}
const lunchmenu = fetchData();

export async function fetchKcal() {
    const res = await fetch(
        `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=c814eb81cdef46fda17b8aa5c0b04d97&TYPE=json&ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7530525&MLSV_YMD=20230523`
    );
    const data = await res.json();
    return data.mealServiceDietInfo[1].row[0].CAL_INFO;
}
