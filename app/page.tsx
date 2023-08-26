import Image from 'next/image';
import styles from './page.module.css';
import axios from 'axios';
import xml2js from 'xml2js';
import MenuList from './MenuList';
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
                <div className='box'>
                    <MenuList />
                </div>
                <div className='alert'>
                    <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' />
                    <span className='material-symbols-outlined'>notifications_active</span>
                    <span className={`alert-text ${noto_sans_light.className}`}>알림 받기</span>
                </div>
            </div>
            {/* <div className='card'></div> */}
        </div>
    );
}
