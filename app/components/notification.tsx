'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components

import { toast } from 'react-toastify';

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

export default function Notification() {
    const onClick = () => toast('기능 준비중입니다.', { hideProgressBar: true, autoClose: 3000, type: 'info' });

    return (
        <button onClick={onClick} className='alert'>
            <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' />
            <span className='material-symbols-outlined'>notifications_active</span>
            <span className={`alert-text ${noto_sans_light.className}`}>알림 받기</span>
        </button>
    );
}
