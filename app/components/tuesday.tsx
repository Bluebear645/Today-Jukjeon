'use client';
import React, { useState, useEffect } from 'react';
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
const { DateTime } = require('luxon');

function addDays(n: number): string {
    const today = DateTime.local();
    const futureDate = today.plus({ days: n });
    const isWeekend = futureDate.weekday === 6 || futureDate.weekday === 7;
    const adjustedDate = isWeekend ? futureDate.plus({ days: 2 }) : futureDate;
    return adjustedDate.toFormat('yyyyMMdd');
}
const YMD = addDays(1);

function todayIs(n: number): string {
    const today = DateTime.local();
    const futureDate = today.plus({ days: n });
    const isWeekend = futureDate.weekday === 6 || futureDate.weekday === 7;
    const adjustedDate = isWeekend ? futureDate.plus({ days: 2 }) : futureDate;
    return adjustedDate.toFormat('yyyy,MM,dd');
}

const today = new Date(todayIs(1));

function Tuesday() {
    const [lunchmenu, setLunchmenu] = useState<string[]>([]);
    const [kcal, setKcal] = useState<string>('');

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=c814eb81cdef46fda17b8aa5c0b04d97&TYPE=json&ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7530525&MLSV_YMD=${YMD}`
            );
            const data = await res.json();
            if (data.RESULT && data.RESULT.CODE === 'INFO-200') {
                setLunchmenu(['정보가 없습니다']);
                setKcal('');
            } else {
                const list = data.mealServiceDietInfo[1].row[0].DDISH_NM;
                const menu = list.split('<br/>').map((item: string) =>
                    item
                        .replace(/^j/, '')
                        .replace(/\(.*?\)/g, '')
                        .trim()
                );
                setLunchmenu(menu);
                setKcal(data.mealServiceDietInfo[1].row[0].CAL_INFO);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <div className='date'>
                <span className={`date-text ${noto_sans.className}`}>
                    {today.getFullYear()}.{today.getMonth() + 1}.{today.getDate()} {new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(today)}
                    <div className='lunch'>
                        {lunchmenu.map((item: string, index: number) => (
                            <span className={`lunch-text ${noto_sans.className}`}>
                                {index + 1}. {item}
                                <br></br>
                            </span>
                        ))}
                        <span className={`kcal-text ${noto_sans_light.className}`}>{kcal}</span>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default Tuesday;
