import Image from 'next/image';
import styles from './page.module.css';
import axios from 'axios';
import xml2js from 'xml2js';
import Lunch from './lunch';
const fs = require('fs');

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

//날짜 정의

export default function Home() {
    return (
        <div>
            <img className='main-logo' src='/icon.svg' width='50vw' />
            <div className='main-border'>
                <Lunch />
                {/* <div className='img-icon'></div>
                <span className={`img-text ${noto_sans_light.className}`}>사진</span> */}
            </div>
            {/* <div className='card'></div> */}
        </div>
    );
}
